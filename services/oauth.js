var request = require('superagent');
var oauth = require('../plugins/oauth');

/**
 * @constructor
 * @param {String} consumerKey The application's API key
 * @param {String} consumerSecret The application's API secret
 */

function OAuth(consumerKey, consumerSecret) {
	if (!consumerKey) {
		throw new Error('Missing required argument "consumerKey"');
	}
	if (!consumerSecret) {
		throw new Error('Missing required argument "consumerSecret"');
	}
	this.consumerKey = consumerKey;
	this.consumerSecret = consumerSecret;
}

/**
 * Get a Request Token using the consumer key.
 * @param {String} oauthCallback
 * @returns {Request}
 * @see https://github.com/visionmedia/superagent
 * @see https://www.flickr.com/services/api/auth.oauth.html#request_token
 */

OAuth.prototype.request = function (oauthCallback) {
	return request('GET', 'https://www.flickr.com/services/oauth/request_token')
	.query({ oauth_callback: oauthCallback })
	.parse(this.parse)
	.use(oauth(this.consumerKey, this.consumerSecret, false, false));

	/*
		TODO 'https://www.flickr.com/services/oauth/authorize?oauth_token=' + res.body.oauth_token
	*/

};

/**
 * Verify an OAuth token using the verifier and token secret.
 * @param {String} oauthToken
 * @param {String} oauthVerifier
 * @param {String} tokenSecret
 * @returns {Request}
 * @see https://github.com/visionmedia/superagent
 * @see https://www.flickr.com/services/api/auth.oauth.html#access_token
 */

OAuth.prototype.verify = function (oauthToken, oauthVerifier, tokenSecret) {
	return request('GET', 'https://www.flickr.com/services/oauth/access_token')
	.query({ oauth_verifier: oauthVerifier })
	.parse(this.parse)
	.use(oauth(this.consumerKey, this.consumerSecret, oauthToken, tokenSecret));

	/*
		TODO hand back a new Flickr instance with the oauth plugin set up?
	*/
};

/**
 * For some OAuth endpoints, the API returns the content-type
 * as "text/plain;charset=UTF-8" when really it should be
 * "application/x-www-form-urlencoded". This getter simply
 * returns the superagent standard form/urlencoded parser.
 * @type {Function}
 */

OAuth.prototype.parse = request.parse['application/x-www-form-urlencoded'];

/**
 * Returns an oauth plugin for this consumer key and secret.
 * @param {String} oauthToken
 * @param {String} oauthTokenSecret
 * @returns {Function}
 */

OAuth.prototype.plugin = function (oauthToken, oauthTokenSecret) {
	return oauth(this.consumerKey, this.consumerSecret, oauthToken, oauthTokenSecret);
};

/**
 * @module services/oauth
 */

module.exports = OAuth;
