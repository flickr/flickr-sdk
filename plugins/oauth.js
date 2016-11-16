var OAuth = require('../services/oauth');

/**
 * Creates a superagent plugin to sign API calls using OAuth 1.0.
 * @param {String} consumerKey
 * @param {String} consumerSecret
 * @param {String} oauthToken
 * @param {String} oauthTokenSecret
 * @returns {Function}
 * @see https://github.com/visionmedia/superagent
 * @see https://www.flickr.com/services/api/auth.oauth.html#call_api
 */

module.exports = function (consumerKey, consumerSecret, oauthToken, oauthTokenSecret) {
	var oauth = new OAuth(consumerKey, consumerSecret);

	if (!oauthToken) {
		throw new Error('Missing required argument "oauthToken"');
	}
	if (!oauthTokenSecret) {
		throw new Error('Missing required argument "oauthTokenSecret"');
	}

	return function (req) {
		// we need to overwrite .end to make sure we
		// sign the request at the last possible moment
		var _end = req.end;

		req.end = function (fn) {
			this.use(oauth.sign(oauthTokenSecret));
			_end.call(this, fn);
		};

		req.query(oauth.params());
		req.query({ oauth_token: oauthToken });
	};
};
