var request = require('superagent');

/**
 * Subclass superagent's Request class so that we can add
 * our own functionality to it.
 * @param {String} method
 * @param {String} url
 * @constructor
 */

function Request(method, url) {
	request.Request.call(this, method, url);
}

Request.prototype = Object.create(request.Request.prototype);

/**
 * Mimic the request factory method that superagent exports.
 * @param {String} method
 * @param {String} url
 * @returns {Request}
 */

exports = module.exports = function (method, url) {
	// callback
	if ('function' === typeof url) {
		return new exports.Request('GET', method).end(url);
	}

	// url first
	if (1 === arguments.length) {
		return new exports.Request('GET', method);
	}

	return new exports.Request(method, url);
};

/**
 * Re-export all of the things superagent exports.
 */

Object.assign(exports, request);

/**
 * @module Request
 */

exports.Request = Request;
