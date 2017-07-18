/**
 * Copyright 2017 Yahoo Holdings.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var request = require('../lib/request');
var oauth = require('../plugins/oauth');

/**
 * Creates a new OAuth service instance. You can use this service to
 * request and validate OAuth tokens, as well as generate an auth
 * plugin suitable for use with the REST and Upload services.
 *
 * You need to [register an application](https://www.flickr.com/services/apps/create/)
 * to obtain your `consumerKey` and `consumerSecret`.
 *
 * ``` js
 * var oauth = new Flickr.OAuth(
 *   process.env.FLICKR_CONSUMER_KEY,
 *   process.env.FLICKR_CONSUMER_SECRET
 * );
 * ```

 * @constructor
 * @param {String} consumerKey - The application's API key
 * @param {String} consumerSecret - The application's API secret
 * @api public
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
 *
 * ``` js
 * oauth.request('http://localhost:3000/oauth/callback').then(function (res) {
 *   console.log('yay!', res);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 * ```
 *
 * @param {String} oauthCallback
 * @returns {Request}
 * @api public
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
 * Returns the authorization url for `requestToken`. You may also pass
 * the `perms` your app is requesting as `read` (the default), `write`,
 * or `delete`. Your application should redirect the user here to ask
 * them to verify your request token.
 *
 * ``` js
 * var url = oauth.authorizeUrl(requestToken); // "https://www.flickr.com/services/oauth..."
 *
 * res.setHeader("Location", url);
 * res.statusCode = 302;
 * res.end();
 * ```
 *
 * @param {String} requestToken
 * @param {String} perms
 * @returns {String}
 * @api public
 * @see https://www.flickr.com/services/api/auth.oauth.html#authorization
 */

OAuth.prototype.authorizeUrl = function (requestToken, perms) {
	if (typeof perms !== 'string') {
		perms = 'read';
	}

	switch (perms) {
	case 'read':
	case 'write':
	case 'delete':
		return 'https://www.flickr.com/services/oauth/authorize?perms=' + perms + '&oauth_token=' + encodeURIComponent(requestToken);
	default:
		throw new Error('Unknown oauth perms "' + perms + '"');
	}
};

/**
 * Verify an OAuth token using the verifier and token secret. If your user
 * has indeed verified your request token, you will receive an OAuth token
 * and secret back, as well as some very basic profile information. You
 * can now use this token and secret to make calls to the REST API.
 *
 * ``` js
 * oauth.verify(oauthToken, oauthVerifier, tokenSecret).then(function (res) {
 *   console.log('oauth token:', res.body.oauth_token);
 *   console.log('oauth token secret:', res.body.oauth_token_secret);
 * }).catch(function (err) {
 *  console.log('bonk', err);
 * });
 * ```
 *
 * @param {String} oauthToken
 * @param {String} oauthVerifier
 * @param {String} tokenSecret
 * @returns {Request}
 * @api public
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
 *
 * ``` js
 * var flickr = new Flickr(oauth.plugin(
 *   oauthToken,
 *   oauthTokenSecret
 * ));
 * ```
 *
 * @param {String} oauthToken
 * @param {String} oauthTokenSecret
 * @returns {Function}
 * @api public
 */

OAuth.prototype.plugin = function (oauthToken, oauthTokenSecret) {
	return oauth(this.consumerKey, this.consumerSecret, oauthToken, oauthTokenSecret);
};

/**
 * @module services/oauth
 */

module.exports = OAuth;
