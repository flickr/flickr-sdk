var crypto = require('crypto');
var parse = require('url').parse;
var stringify = require('querystring').stringify;

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
 * Returns `url` with the query string part removed.
 * @param {String} url
 * @returns {String}
 */

function parseUrl(url) {
	var query = url.indexOf('?');

	if (query > -1) {
		return url.slice(0, query);
	} else {
		return url;
	}
}

/**
 * Returns the query string part of `url`, sorted lexicographically.
 * @param {String} url
 * @returns {String}
 */

function parseQuery(url) {
	var parts = parse(url, true);
	var query = {};

	Object.keys(parts.query).sort().forEach(function (key) {
		query[key] = parts.query[key];
	});

	return stringify(query);
}

/**
 * @constructor
 * @param {String} consumerKey The application's API key
 * @param {String} consumerSecret The application's API secret
 * @see https://www.flickr.com/services/api/auth.oauth.html
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
 * The signature method is always HMAC-SHA1.
 * @type {String}
 * @see https://oauth.net/core/1.0a/#rfc.section.9.2
 */

OAuth.prototype.signatureMethod = 'HMAC-SHA1';

/**
 * The version is always 1.0.
 * @type {String}
 */

OAuth.prototype.version = '1.0';

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
		oauth_signature_method: this.signatureMethod,
		oauth_version: this.version
	};
};

/**
 * Calculates the OAuth 1.0 signature for `method` and `url`,
 * optionally including `tokenSecret`.
 * @param {String} method
 * @param {String} url
 * @param {String} tokenSecret
 * @returns {String}
 */

OAuth.prototype.signature = function (method, url, tokenSecret) {
	var signingKey = join([ this.consumerSecret, tokenSecret || '' ]);
	var baseString = join([ method, parseUrl(url), parseQuery(url) ]);

	return hmac(baseString, signingKey);
};

/**
 * Adds the `oauth_signature` query parameter to `url` and returns it.
 * @param {String} method
 * @param {String} url
 * @param {String} tokenSecret
 * @returns {String}
 */

OAuth.prototype.sign = function (method, url, tokenSecret) {
	return url + (url.includes('?') ? '&' : '?') + 'oauth_signature=' + encodeURIComponent(this.signature(method, url, tokenSecret));
};

/**
 * @module lib/oauth
 */

module.exports = OAuth;
