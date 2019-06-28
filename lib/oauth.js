/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var crypto = require('crypto');
var stringify = require('querystring').stringify;

/**
 * A hashmap of characters that also need to be encoded per RFC3986.
 * @type {Object}
 */

var chars = {
	'!': '%21',
	'\'': '%27',
	'(': '%28',
	')': '%29',
	'*': '%2A'
};

/**
 * RegExp pattern that will match any of the keys in `chars` globally.
 * @type {RegExp}
 */

var regex = new RegExp('[' + Object.keys(chars).join('') + ']', 'g');

/**
 * Encodes `str` per RFC3986, which is basically what encodeURIComponent
 * does plus a few extra encoded characters.
 * @param {String} str
 * @returns {String}
 */

function encodeRFC3986(str) {
	return encodeURIComponent(str).replace(regex, function (c) {
		return chars[c];
	});
}

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
	return arr.map(encodeRFC3986).join('&');
}

/**
 * Returns `obj` sorted lexicographically by its keys and stringified.
 * @param {Object} obj
 * @returns {String}
 */

function sortParams(obj) {
	var tmp = {};

	Object.keys(obj).sort().forEach(function (key) {
		tmp[key] = obj[key];
	});

	return stringify(tmp, '&', '=', {
		encodeURIComponent: encodeRFC3986
	});
}

/**
 * Returns a copy of `obj` with all undefined key/value pairs removed.
 * @param {Object} obj
 * @returns {Object}
 */

function cleanParams(obj) {
	var tmp = {};

	Object.keys(obj).forEach(function (key) {
		if (typeof obj[key] !== 'undefined') {
			tmp[key] = obj[key];
		}
	});

	return tmp;
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
 * Calculates the OAuth 1.0 signing key for this consumer secret,
 * optionally supplying `tokenSecret`.
 * @param {String} tokenSecret
 * @returns {String}
 */

OAuth.prototype.signingKey = function (tokenSecret) {
	return join([ this.consumerSecret, tokenSecret || '' ]);
};

/**
 * Calculates the OAuth 1.0 base string for `method`, `url` and `params`.
 * @param {String} method
 * @param {String} url
 * @param {Object} params
 * @returns {String}
 */

OAuth.prototype.baseString = function (method, url, params) {
	return join([ method, url, sortParams(cleanParams(params)) ]);
};

/**
 * Calculates the OAuth 1.0 signature for `method` and `url`,
 * optionally including `tokenSecret`.
 * @param {String} method
 * @param {String} url
 * @param {Object} params
 * @param {String} tokenSecret
 * @returns {String}
 */

OAuth.prototype.signature = function (method, url, params, tokenSecret) {
	return hmac(
		this.baseString(method, url, params),
		this.signingKey(tokenSecret)
	);
};

/**
 * @module lib/oauth
 */

module.exports = OAuth;
