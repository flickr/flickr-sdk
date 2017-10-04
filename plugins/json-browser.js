/*!
 * Copyright 2017 Yahoo Holdings.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

/**
 * Custom response parser routine to handle Flickr API-style
 * error responses. The Flickr API has a whole bunch of client
 * error codes, but they all come back as HTTP 200 responses.
 * Here, we extend the normal JSON response parser and check
 * for a Flickr API error. If we find one, craft a new error
 * out of that and throw it.
 * @param {Response} res
 * @param {String} json
 * @returns {Object}
 */

function parseFlickr(res, json) {
	var body = JSON.parse(json);
	var err;

	if (body.stat === 'fail') {
		err = new Error(body.message);
		err.stat = body.stat;
		err.code = body.code;

		throw err;
	}

	return body;
}

/**
 * Superagent plugin-style function to request and parse
 * JSON responses from the Flickr REST API.
 * @param {Request} req
 * @returns {undefined}
 */

module.exports = function (req) {
	req.query({ format: 'json' });
	req.query({ nojsoncallback: 1 });
	req.parse(parseFlickr);
};
