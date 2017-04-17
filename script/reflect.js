/* global Promise */

var fs = require('fs');
var path = require('path');
var request = require('../request')({
	api_key: process.env.FLICKR_API_KEY
});

/**
 * Polyfill Promise in environments that need it
 */

require('es6-promise').polyfill();

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
 * Get the method info for `method` and write it to disk
 * @param {Object} method
 * @returns {Promise}
 */

function info(method) {
	return request('flickr.reflection.getMethodInfo')
	.query('method_name=' + method._content)
	.then(function (res) {
		fs.writeFileSync(filename(method._content), stringify(res.body));
	});
}

/**
 * Get info for every method and write them all to disk
 */

request('flickr.reflection.getMethods').then(function (res) {
	return res.body.methods.method;
}).then(function (methods) {
	return Promise.all(methods.map(info));
}).catch(function (err) {
	// eslint-disable-next-line no-console
	console.error(err);
	process.exit(err.code || 1);
});
