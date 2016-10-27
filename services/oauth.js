var request = require('superagent');
var crypto = require('crypto');

/**
 * Returns the HMAC-SHA1 digest of `text` and `key` in baset64 encoding.
 * @param {String} text
 * @param {String} key
 * @returns {String}
 * @see https://oauth.net/core/1.0a/#rfc.section.9.2
 * @private
 */

function hmac(text, key) {
	return crypto.createHmac('sha1', key).update(text).digest('base64');
}

/**
 * Encodes each of the strings in `arr` and joins them with the '&'
 * character (ASCII code 38).
 * @param {String[]} arr
 * @returns {String}
 * @see https://oauth.net/core/1.0a/#rfc.section.9.1.3
 * @see https://oauth.net/core/1.0a/#encoding_parameters
 * @private
 */

function join(arr) {
	return arr.map(encodeURIComponent).join('&');
}

/**
 * Normalizes and sorts all of the query string params in `req`,
 * then joins them with the '&' character (ASCII code 38).
 * @param {Request}
 * @returns String.
 * @see https://oauth.net/core/1.0a/#sig_norm_param
 * @private
 */

function query(req) {
	var pairs = req.qsRaw.slice();

	Object.keys(req.qs).forEach(function (key) {
		pairs.push(key + '=' + encodeURIComponent(req.qs[key]));
	});

	return pairs.sort().join('&');
}

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
 * @module services/oauth
 */

module.exports = OAuth;

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
	.query(this.params())
	.parse(this.parse)
	.use(this.sign());

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
	.query({ oauth_token: oauthToken, oauth_verifier: oauthVerifier })
	.query(this.params())
	.parse(this.parse)
	.use(this.sign(tokenSecret));
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
 * Returns the number of seconds since January 1, 1970 00:00:00 GMT.
 * @returns {Number}
 * @see https://oauth.net/core/1.0a/#nonce
 */

OAuth.prototype.timestamp = function () {
	return Math.floor(Date.now() / 1000);
};

/**
 * Generates a pseudo-random string. OAuth 1.0 defines a
 * nonce as a value unique within a given timestamp in seconds.
 * @returns {String}
 * @see https://oauth.net/core/1.0a/#nonce
 */

OAuth.prototype.nonce = function () {
	return crypto.pseudoRandomBytes(32).toString('base64');
};

/**
 * Creates an object with the standard OAuth 1.0 query params
 * for this instance.
 * @returns {Object}
 */

OAuth.prototype.params = function () {
	return {
		oauth_nonce: this.nonce(),
		oauth_timestamp: this.timestamp(),
		oauth_consumer_key: this.consumerKey,
		oauth_signature_method: 'HMAC-SHA1',
		oauth_version: '1.0'
	};
};

/**
 * TODO docs
 */

OAuth.prototype.sign = function (tokenSecret) {
	var consumerSecret = this.consumerSecret;

	return function (req) {
		var signingKey = join([ consumerSecret, tokenSecret || '' ]);
		var baseString = join([ req.method, req.url, query(req) ]);

		req.query({
			oauth_signature: hmac(baseString, signingKey)
		});
	};
};
