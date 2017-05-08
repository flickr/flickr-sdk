// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint ignore:start */
/* jscs:disable */
var Promise = require('native-promise-only');
var request = require('superagent');
var except = require('except');
var Backoff = require('backo');
var backoff = new Backoff({ min: 100, max: 10000, jitter: 0, factor: 2 });
var retryErrors = require('./retryerrors.js');
var merge = require('deepmerge');
var validate = require('./validate.js');
var generateURL = require('./generate-url.js');
var headers = require('./headers.js');

// Different crypto for client vs. server
/* istanbul ignore next */
var crypto = process.browser ? require('../shims/crypto-client') : require('../shims/crypto-server');

/**
 * Initiate the Transport function
 *
 * @method FlickrTransport
 * @param {Object} config - Any options that you wish to configure when setting up the API.
 * @returns {Function} - The function to which the other calls can be chained.
 */
var FlickrTransport = function (config, options) {

	if (!config.timeout) {
		config.timeout = 15000; // 15 seconds
	}

	if (!config.retries) {
		config.retries = 3;
	}

	if (!config.onProgress) {
		/* istanbul ignore next */
		config.onProgress = function () { /*noop*/ };
	}

	this.config = config;
	this.retries = 3;
	this.plugins = [];

	this.log = function (message) {
		if (options && options.logger && typeof options.logger.log === 'function') {
			options.logger.log(message);
		}
	};

};

/**
 * Create an oauth 1.0 signature from the request object
 * I would love to use the oauth-signature npm module here
 * but because of the upload API's requirement to *not* include
 * the access token secret in the signing key we can't use it.
 *
 * @method createSignature
 * @param {Object} req - The request object.
 * @param {Object} params - The params being sent through to the call.
 * @returns {string} - The signature required to make the request.
 */
FlickrTransport.prototype.createSignature = function (req, params, signingSecret) {

	var baseString = req.method.toUpperCase() + '&' + encodeURIComponent(req.url) + '&',
	    signingKey = this.config.apiSecret + "&" + (signingSecret || '');

	Object.keys(params).sort().forEach(function(key, i) {
		baseString += (i > 0) ? encodeURIComponent('&') : '';
		baseString += encodeURIComponent(key + '=' + params[key]);
	});

	return crypto.createHmac('sha1', signingKey).update(baseString).digest('base64');

};

/**
 * Create a one-time nonce
 *
 * @method createNonce
 * @returns {string} - The hash required to make the request.
 */
FlickrTransport.prototype.createNonce = function () {
	return crypto.createHash('sha1').update(String(Date.now())).digest('hex');
};

/**
 * Determine if the error/response from the api call means we should try and make the call again.
 *
 * @method shouldRetry
 * @param {Object} error - The error object. This can also be null if there is no error.
 * @param {Object} response - The response object.
 * @returns {Boolean} - Whether or not the call should retry.
 */
FlickrTransport.prototype.shouldRetry = function (error, response) {
	return retryErrors.some(function (check) {
		return check(error, response);
	});
}

/**
 * Superagent plugin for all of the default flickr api v1 params
 *
 * @method createSignature
 * @returns {Object} The default params.
 */
FlickrTransport.prototype.defaults = function (req) {
	return {
		format: 'json',
		nojsoncallback: 1
	};
};

/**
 * Attaching plugins to the request
 *
 * @method usePlugins
 */
FlickrTransport.prototype.usePlugins = function (plugins) {

	return function (req) {
		// If there's plugins use them
		if (plugins.length > 0) {
			plugins.forEach(function (plugin) {
				req.use(plugin);
			});
		}
	}

};

/**
 * Superagent plugin attaching a file if we've got one
 *
 * @method attachFile
 * @param {Object} params - Contains the parameters being passed to the api.
 * @returns {Function} - A callable function that takes the request as a parameter.
 */
FlickrTransport.prototype.attachFile = function (params) {
	return function (req) {
		if (params.photo) {
			req.attach('photo', params.photo);
		}
	};
};

/**
 * Superagent plugin for generating oauth params
 *
 * @method oAuth
 * @param {Object} params - Contains the parameters being passed to the api.
 * @returns {Function} - A callable function that takes the request as a parameter.
 */
FlickrTransport.prototype.oAuth = function (params, auth, isUpload) {

	var flickrTransport = this;

	return function (req) {

		if (isUpload) {

			// Flickr upload params get appended to the POST body
			var oauthParams = {
				oauth_consumer_key:     flickrTransport.config.apiKey,
				oauth_token:            auth.accessToken,
				oauth_version:          '1.0',
				oauth_timestamp:        Math.round(Date.now() / 1000),
				oauth_nonce:            flickrTransport.createNonce(),
				oauth_signature_method: 'HMAC-SHA1'
			};

			oauthParams = merge(oauthParams, flickrTransport.defaults(req));

			Object.keys(oauthParams).forEach(function (oauthParam) {
				if (typeof oauthParams[oauthParam] !== 'undefined') {
					req.field(oauthParam, oauthParams[oauthParam]);
				}
			});

			req.field('oauth_signature', flickrTransport.createSignature(req, merge(params, oauthParams), auth.accessTokenSecret));

		} else {

			var oauthParams = {
				oauth_consumer_key: flickrTransport.config.apiKey,
				oauth_token:        auth.accessToken,
				oauth_version:      '1.0',
				oauth_timestamp:    Math.round(Date.now() / 1000),
				oauth_nonce: flickrTransport.createNonce(),
				oauth_signature_method: 'HMAC-SHA1'
			};

			oauthParams = merge(oauthParams, flickrTransport.defaults(req));

			req.query(oauthParams);

			req.query({
				oauth_signature: flickrTransport.createSignature(req, merge(params, oauthParams), auth.accessTokenSecret)
			});

		}

	}

};

/**
 * Calls the given operation with `params`. The object provided
 * is in the form `{ schema, path, verb }`. Throws if the params
 * do not match the operation's parameters.
 * @private
 * @param {Object} additionalParams Hash of extra params to merge in
 * @param {Object} transportConfig Hash of extra transport configs to merge in
 * @returns {Promise}
 */
FlickrTransport.prototype.call = function (definition, params, auth, additionalParams, transportConfig) {
	var flickrTransport = this;

	/* istanbul ignore next */
	if (process.browser && flickrTransport.config && flickrTransport.config.apiSecret) {
		throw new Error('Embedding your API secret in the browser could allow a malicious third-party to make API calls using your key.  Making authenticated API calls is disabled in the browser using this SDK at the moment.');
	}

	var schema = definition.schema;
	var path = definition.path;
	var verb = definition.verb;
	var config = schema.paths[path][verb];
	var operationId = config.operationId;
	var startTime = new Date().getTime();
	var defaultParamExceptions = [ 'photo', 'url', 'arguments', 'headers' ];
	var nonQueryParams = [];
	var responseHeaders = {};
	var responseBody;

	auth = auth || {};

	var apiParams = merge(params, additionalParams || {});

	// Remove any null params
	Object.keys(apiParams).forEach(function (paramKey) {
		if (apiParams[paramKey] === null) {
			delete apiParams[paramKey];
		}
	});

	return new Promise(function (resolve, reject) {

		var validationErrors = validate(apiParams, config.parameters);

		if (validationErrors.length > 0) {
			reject(validationErrors);
			return;
		}

		// Get a URL with params substituted in where appropriate
		var uri = generateURL(definition, apiParams, merge(flickrTransport.config, transportConfig || {}));

		// Filter out non-query params
		config.parameters.forEach(function (configParam) {
			if (configParam.in !== 'query') {
				nonQueryParams.push(configParam.name);
			}
		});

		// Not all params get passed to oauth
		var oauthParams = except(apiParams, defaultParamExceptions.concat(nonQueryParams));

		// Start log
		flickrTransport.log("Starting " + verb + " API call to " + uri);

		function makeRequest() {

			request(verb, uri)
			.use(function (request) {
				/* istanbul ignore else */
				if (!process.browser) {
					// Cookies are implicit on the client
					request.set("Cookie", flickrTransport.config.cookie || "");
				}
				return request;
			})
			.use(function (request) {
				request.query(oauthParams);

				if (verb === "post") { request.send(apiParams); }

				return request;
			})
			.use(flickrTransport.attachFile(apiParams))
			.use(function (request) {
				// if we don't have an access token, don't attach auth
				// to the request
				if (operationId !== 'getRequestToken' && operationId !== 'getAccessToken') {
					return flickrTransport.oAuth(oauthParams, auth, apiParams.photo)(request);
				}
				return request;
			})
			.use(flickrTransport.usePlugins(flickrTransport.plugins))
			.end(handleRequest);

			// Reset the plugins as they are definied per request
			flickrTransport.plugins = [];
		}

		function handleRequest(err, res) {

			// End log
			flickrTransport.log("Finished " + verb + " API call to " + uri + " in " + (new Date().getTime() - startTime) + "ms");

			// Decrement retries
			flickrTransport.retries--;

			if (err) {
				// HTTP error
				if (flickrTransport.retries > 0 && flickrTransport.shouldRetry(err, res)) {
					// Try again
					setTimeout(makeRequest, backoff.duration());
				} else {
					flickrTransport.resetRetries();
					reject(err);
					return;
				}
			} else {

				if (res.body && Object.keys(res.body).length === 0 && res.text.match(/xml/)) {
					// Deal with the XML response as if it's a string. The response
					// is always simple so there's no need to convert it wholesale to
					// JSON which would introduce a heavy dependency.
					/* istanbul ignore next */
					if (res.text.match(/stat="fail"/)) {
						// Good ol' Flickr 200 but with error
						flickrTransport.resetRetries();
						reject({
							code: res.text.match(/code="([0-9]+)"/)[1],
							message: res.text.match(/msg="([A-Za-z0-9\-\s]+)"/)[1]
						});
						return;
					} else {
						flickrTransport.resetRetries();
						responseBody = {
							photoID: res.text.match(/<photoid>([0-9]+)<\/photoid>/)[1]
						};
					}
				} else {
					// Regular response in the body
					if (res.body && res.body.stat === 'fail') {
						// Good ol' Flickr 200 but with error
						flickrTransport.resetRetries();
						reject(res.body);
						return;
					} else {
						flickrTransport.resetRetries();
						responseBody = res.body;
					}
				}

				// Check if there are response headers we want to return
				// in our own response
				Object.keys(res.headers).forEach(function (headerKey) {
					if (headers[headerKey]) {
						responseHeaders[headers[headerKey]] = res.headers[headerKey];
					}
				});

				responseBody = responseBody || {};

				// When we're requesting a token, it returns text that we need to parse
				/* istanbul ignore next */
				if (res.type === 'text/plain' && (operationId === "getRequestToken" || operationId === "getAccessToken")) {
					var values = (res.text || '').split('&');
					values.forEach(function (keyPair) {
						var keyVal = keyPair.split('=');
						if (keyVal.length > 1) {
							responseBody[keyVal[0]] = keyVal[1];
						}
					})
				}

				// Return the whole lot
				resolve({
					headers: responseHeaders,
					body: responseBody
				});

			}

		}

		// Make the initial call
		makeRequest();

	});

};

/**
 * Resets the backoff and retries remaining counter
 * @private
 */
FlickrTransport.prototype.resetRetries = function () {
	backoff.reset();
	this.retries = 3;
};

module.exports = FlickrTransport;
