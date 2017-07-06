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
		// we need to overwrite _finalizeQueryString to make sure we
		// sign the request at the last possible moment
		var _finalizeQueryString = req._finalizeQueryString;

		req._finalizeQueryString = function () {
			// call the original, this.url now has all of the query
			// string parameters appended
			_finalizeQueryString.call(this);

			// sign the url with token secret unless it was
			// explicitly omitted
			if (oauthTokenSecret !== false) {
				this.url = oauth.sign(this.method, this.url, oauthTokenSecret);
			} else {
				this.url = oauth.sign(this.method, this.url);
			}
		};

		// always add our oauth params
		req.query(oauth.params());

		// add the oauth token unless explicitly omitted
		if (oauthToken !== false) {
			req.query({ oauth_token: oauthToken });
		}

	};
};
