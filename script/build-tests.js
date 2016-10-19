var path = require('path');
var util = require('util');
var ejs = require('ejs');
var fs = require('fs');

/**
 * All available methods
 * @type {Object}
 */

var methods = require('require-dir')('../src');

/**
 * Returns the destination filename for `method`'s test case
 * @param {String} method
 * @returns {String}
 */

function filename(method) {
	return path.join('test', method + '.js');
}

/**
 * Returns a hash of the non-optional arguments in `info`
 * to a test-only placeholder truthy value.
 * @param {Object} info
 * @returns {Object}
 */

function requiredArguments(info) {
	var obj = {};

	info.arguments.argument.filter(function (arg) {
		return !parseInt(arg.optional, 10);
	}).forEach(function (arg) {
		obj[arg.name] = '_';
	});

	return obj;
}

/**
 * Returns a shallow copy of `obj` with the specified
 * field `field` removed.
 * @param {Object} obj
 * @param {String} field
 * @returns {Object}
 */

function without(obj, field) {
	var ret = {};

	Object.keys(obj).forEach(function (key) {
		ret[key] = obj[key];
	});

	delete ret[field];
	return ret;
}

function namespace(method) {
	return method.split('.').slice(0, -1).join('.');
}

/**
 * Generate a test for every method
 */

Object.keys(methods).forEach(function (method) {
	ejs.renderFile(__dirname + '/test.ejs', {

		method: method,
		args: requiredArguments(methods[method]),
		without: without,
		namespace: namespace,
		toObject: util.inspect

	}, function (err, str) {
		if (err) {
			throw err;
		}
		fs.writeFileSync(filename(method), str);
	});
});
