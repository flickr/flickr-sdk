/* global Promise */

var fs = require('fs');
var path = require('path');
var limit = require('p-limit')(2); // concurrency
var prune = require('dotprune').prune;
var spinner = require('ora')(require('./fun/spinner'));
var flickr = require('..')(process.env.FLICKR_API_KEY);

/**
 * Get the destination filename for `method`
 * @param {String} method
 * @returns {String}
 */

function filename(method) {
	return path.join('src', method + '.json');
}

/**
 * Returns a JSON representation of `obj`.
 * @param {Object} obj
 * @returns {String}
 */

function stringify(obj) {
	return JSON.stringify(obj, null, 2) + '\n';
}

/**
 * Returns only the properties of `obj` that we want to store.
 * @param {Object} obj
 * @returns {Object}
 */

function filter(obj) {
	return prune(obj, [
		'method.name',
		'method.requiredperms',
		'arguments.argument.name',
		'arguments.argument.optional'
	]);
}

/**
 * Get the method info for `method` and write it to disk
 * @param {Object} method
 * @returns {Promise}
 */

function info(method) {
	return limit(() => flickr.reflection.getMethodInfo({
		method_name: method._content
	}).on('request', function (req) {
	  spinner.text = method._content;
	}).then(function (res) {
		fs.writeFileSync(filename(method._content), stringify(filter(res.body)));
	}));
}

/**
 * Start the spinner
 */

spinner.start();

/**
 * Get info for every method and write them all to disk
 */

flickr.reflection.getMethods().then(function (res) {
	return res.body.methods.method;
}).then(function (methods) {
	return Promise.all(methods.map(info));
}).then(function () {
	spinner.succeed('All methods have been updated!');
}).catch(function (err) {
	spinner.fail(err.message);
	process.exit(err.code || 1);
});
