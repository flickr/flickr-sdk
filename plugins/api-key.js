/**
 * Copyright 2017 Yahoo Holdings.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

/**
 * Creates a superagent plugin that adds your Flickr API key
 * to a request. You may pass your API key as a string, or
 * in an object with an "api_key" field.
 * @param {(String|Object)} params
 * @returns {Function}
 * @see https://github.com/visionmedia/superagent
 */

module.exports = function (params) {
	if (typeof params === 'undefined') {
		params = {};
	} else if (typeof params === 'string') {
		params = { api_key: params };
	}
	if (typeof params.api_key !== 'string') {
		throw new Error('Missing required argument "api_key"');
	}

	return function (req) {
		req.query(params);
	};

};
