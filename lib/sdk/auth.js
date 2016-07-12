/**
 * Group of methods for authenticating with the Flickr API
 * @memberof! FlickrRequest#
 * @function auth
 * @returns {object} verbs for working with auth namespace
 */

var apiV1 = require('flickr-api-swagger');
var generateURL = require('../generate-url.js');

module.exports = function (personID) {

	var request = this;

	return {

		getRequestToken: function (oauthCallback) {

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
			);
		}

	};

};