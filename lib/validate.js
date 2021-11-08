/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

/**
 * Asserts that any of the N keys passed in
 * are found in the obj
 * @param {Object} obj
 * @param {(String|String[])} keys
 * @throws {Error}
 */

module.exports = function (obj, keys) {
	var matches;

	if (!keys) {
		// you shouldn't be calling this function if you're
		// not providing keys, but we won't die if you do
		return;
	}

	obj = obj || {};

	if (typeof keys === 'string') {

		if (!Object.prototype.hasOwnProperty.call(obj, keys)) {
			throw new Error('Missing required argument "' + keys + '"');
		}
	} else {

		matches = keys.filter(function (key) {
			return Object.prototype.hasOwnProperty.call(obj, key);
		});

		if (matches.length === 0) {
			throw new Error('Missing required argument, you must provide one of the following: "' + keys.join('", "') + '"');
		}
	}

};
