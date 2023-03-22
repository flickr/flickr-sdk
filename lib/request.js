/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var request = require('superagent');
var parse = require('querystring').parse;
var version = require('../package.json').version;

/**
 * Subclass superagent's Request class so that we can add
 * our own functionality to it.
 * @param {String} method
 * @param {String} url
 * @constructor
 */

function Request(method, url) {
	request.Request.call(this, method, url);

	// keep track of all request params for oauth signing
	this.params = {};

	// superagent no longer sets a default user agent header
	this.set('user-agent', 'flickr-sdk/' + version);
}

Request.prototype = Object.create(request.Request.prototype);

/**
 * Override .query() to also add query string params to our params hash.
 * @param {String|Object} val
 * @returns {this}
 */

Request.prototype.query = function (val) {
	if (typeof val === 'string') {
		Object.assign(this.params, parse(val));
	} else {
		Object.assign(this.params, val);
	}

	// super
	return request.Request.prototype.query.call(this, val);
};

/**
 * Override .field() to also add fields to our params hash.
 * @param {String|Object} key
 * @param {String} val
 * @returns {this}
 */

Request.prototype.field = function (key, val) {
	if (typeof key === 'string') {
		this.params[key] = val;
	} else {
		Object.assign(this.params, key);
	}

	// super
	return request.Request.prototype.field.call(this, key, val);
};

/**
 * Convenience method to either call .query() or .field()
 * based on this request's method.
 * @param {Object} obj
 * @returns {this}
 */

Request.prototype.param = function (obj) {
	switch (this.method) {
	case 'POST':
		return this.field.call(this, obj);
	default:
		return this.query.call(this, obj);
	}
};

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
