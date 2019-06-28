/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var OAuth = require('../lib/oauth');

/**
 * Creates a superagent plugin to sign API calls using OAuth 1.0.
 * You must provide `oauthToken` and `oauthTokenSecret` when signing
 * calls to the Flickr API, or you may pass `false` to explicitly
 * omit one or both of these parameters, as is the case for the
 * OAuth 1.0 flow in /services/oauth.
 * @param {String} consumerKey
 * @param {String} consumerSecret
 * @param {String|false} oauthToken
 * @param {String|false} oauthTokenSecret
 * @returns {Function}
 * @see https://github.com/visionmedia/superagent
 * @see https://www.flickr.com/services/api/auth.oauth.html#call_api
 */

module.exports = function (consumerKey, consumerSecret, oauthToken, oauthTokenSecret) {
	var oauth = new OAuth(consumerKey, consumerSecret);

	if (!oauthToken && oauthToken !== false) {
		throw new Error('Missing required argument "oauthToken"');
	}
	if (!oauthTokenSecret && oauthTokenSecret !== false) {
		throw new Error('Missing required argument "oauthTokenSecret"');
	}

	return function (req) {
		// we need to overwrite .end to make sure we
		// sign the request at the last possible moment
		var _end = req.end;

		req.end = function (fn) {

			// sign the url with token secret unless it was
			// explicitly omitted
			if (oauthTokenSecret !== false) {
				this.param({
					oauth_signature: oauth.signature(this.method, this.url, this.params, oauthTokenSecret)
				});
			} else {
				this.param({
					oauth_signature: oauth.signature(this.method, this.url, this.params)
				});
			}

			// call the original
			_end.call(this, fn);
		};

		// always add our oauth params
		req.param(oauth.params());

		// add the oauth token unless explicitly omitted
		if (oauthToken !== false) {
			req.param({ oauth_token: oauthToken });
		}

	};
};
