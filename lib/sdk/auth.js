/**
 * Group of methods for authenticating with the Flickr API
 * @memberof! FlickrRequest#
 * @function auth
 * @returns {object} verbs for working with auth namespace
 */

var apiV1 = require('flickr-api-swagger');
var generateURL = require('../generate-url.js');

function getRequestToken (request, oauthCallback) {
	var oauthParams = {
			oauth_nonce: request.sdk.transport.createNonce(),
			oauth_timestamp: '' + Math.round(Date.now() / 1000),
			oauth_signature_method: 'HMAC-SHA1',
			oauth_version: '1.0',
			oauth_consumer_key: request.sdk.transport.config.apiKey,
			oauth_callback: encodeURIComponent(oauthCallback)
		},
		decoratedRequest = request,
		definition = request.sdk.findDefinition(apiV1, 'getRequestToken');

	decoratedRequest.method = definition.verb;
	decoratedRequest.url = generateURL(definition);

	oauthParams['oauth_signature'] = request.sdk.transport.createSignature(decoratedRequest, oauthParams);
	oauthParams['oauth_callback'] = oauthCallback;

	return request.sdk.transport.call(
		request.sdk.findDefinition(apiV1, 'getRequestToken'),
		oauthParams
	).then(function (response) {
		// clean up the response for consumers
		var returnObj = response.body;

		returnObj.authorizationURL = definition.schema.schemes[0] + '://' + definition.schema.host + definition.schema.basePath + '/oauth/authorize?oauth_token=' + response.body.oauth_token;
		return returnObj;
	});
}

function getAccessToken (request, oauthToken, oauthTokenSecret, oauthVerifier) {
	var oauthParams = {
			oauth_nonce: request.sdk.transport.createNonce(),
			oauth_timestamp: '' + Math.round(Date.now() / 1000),
			oauth_signature_method: 'HMAC-SHA1',
			oauth_version: '1.0',
			oauth_consumer_key: request.sdk.transport.config.apiKey,
			oauth_token: oauthToken,
			oauth_verifier: oauthVerifier
		},
		decoratedRequest = request,
		definition = request.sdk.findDefinition(apiV1, 'getAccessToken');

	decoratedRequest.method = definition.verb;
	decoratedRequest.url = generateURL(definition);

	oauthParams['oauth_signature'] = request.sdk.transport.createSignature(decoratedRequest, oauthParams, oauthTokenSecret);

	return request.sdk.transport.call(
		request.sdk.findDefinition(apiV1, 'getAccessToken'),
		oauthParams,
		{} // no additional params
	)
	.then(function (response) {
		// clean up the response for consumers
		return response.body;
	});
}

module.exports = function () {

	var request = this;

	/* istanbul ignore next */
	if (process.browser) {
		throw new Error('Authentication is not supported in the browser at this time.');
	}

	return {

		prepareRequestToken: function (oauthCallbackURI) {
			/* istanbul ignore next */
			if (process.browser) {
				console.warn('It is stringly discouraged to make this call from a browser. See github.com/flickr/flickr for more details.');
			}

			return getRequestToken(request, oauthCallbackURI);
		},

		/**
		 * We handle the auth pop up ourself, or defer to the user
		 * The callback page in the popup will beacon back the oauth token
		 * We then use that to request an access token
		 * And when that comes back we're authed!
		 */
		authenticateUser: function (requestToken, requestTokenSecret, requestTokenVerifier) {

			return new Promise(function (resolve, reject) {

				var requestTokenDefinition = request.sdk.findDefinition(apiV1, 'getRequestToken');
				var requestURL = requestTokenDefinition.schema.schemes[0] + '://' + requestTokenDefinition.schema.host + requestTokenDefinition.schema.basePath + '/oauth/authorize?oauth_token=' + requestToken;

				/* istanbul ignore else  */
				if (!process.browser) {
					if (!requestTokenVerifier) {
						reject(new Error('You must specify the request token verifier.'));
					}

					resolve({
						'oauth_verifier': requestTokenVerifier
					});
				} else {

					var popup = window.open(requestURL);
					window['flickr-sdk-auth-success'] = function (data) {
						resolve(data);
					};
					window['flickr-sdk-auth-failure'] = function (data) {
						reject(data);
					};
				}
			})
			.then(function (data) {
				return getAccessToken(request, requestToken, requestTokenSecret, data.oauth_verifier);
			});
		}
	};
};