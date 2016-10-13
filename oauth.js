var crypto = require('crypto');
var merge = require('deepmerge');

/**
 * Create oauth compliant basestring, signing key, and then signature
 * @param {String} method
 * @param {String} url
 * @param {String} apiSecret
 * @param {String} tokenSecret
 * @param {object} params
 * @returns {String}
 */
function createSignature(method, url, apiSecret, tokenSecret, params) {

	var baseString = method.toUpperCase() + '&' + encodeURIComponent(url) + '&',
	    signingKey = apiSecret + "&" + (tokenSecret || '');

	Object.keys(params).sort().forEach(function (key, i) {
		baseString += (i > 0) ? encodeURIComponent('&') : '';
		baseString += encodeURIComponent(key + '=' + params[key]);
	});

	return crypto.createHmac('sha1', signingKey).update(baseString).digest('base64');
}

/**
 * Collects oauth parameters and makes a call to create a signature
 * @param {Superagent request} req
 * @param {object} requestParams
 * @returns {Superagent request}
 */
function addOAuthSignature(req, requestParams) {

	var oauthParams = {
		oauth_consumer_key: requestParams.apiKey,
		oauth_token: requestParams.accessToken,
		oauth_version: '1.0',
		oauth_timestamp: Math.round(Date.now() / 1000),
		oauth_nonce: crypto.createHash('sha1').update(String(Date.now())).digest('hex'),
		oauth_signature_method: 'HMAC-SHA1'
	};

	// add query params and then sign
	return req.query(oauthParams)
	.query({
		oauth_signature: encodeURIComponent(
			createSignature(
				requestParams.method,
				requestParams.url,
				requestParams.apiSecret,
				requestParams.accessTokenSecret,
				merge(requestParams.queryStringParams, oauthParams)
			)
		)
	});
}

/**
 * Creates a superagent plugin to sign API calls using the access token details
 * compliant with oauth 1, which the API expects
 * @param {String} accessToken
 * @param {String} accessTokenSecret
 * @param {String} apiSecret
 * @returns {Function}
 * @see https://github.com/visionmedia/superagent
 */
module.exports = function (accessToken, accessTokenSecret, apiSecret) {
	return function (req) {
		var queryStringObj = {},
			queryStrings = req.qsRaw,
			requestParams = req.qs;

		queryStrings.forEach(function (queryString) {
			var keyValuePair = queryString.split('=');

			queryStringObj[keyValuePair[0]] = keyValuePair[1];
		});

		return addOAuthSignature(req, {
			apiKey: requestParams.api_key,
			method: req.method,
			url: req.url,
			apiSecret: apiSecret,
			accessToken: accessToken,
			accessTokenSecret: accessTokenSecret,
			queryStringParams: queryStringObj
		});
	};
};
