/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

/**
 * Custom response parser routine to handle Flickr API-style
 * error responses. The Flickr API has a whole bunch of client
 * error codes, but they all come back as HTTP 200 responses.
 * Here, we add in additional logic to accommodate this and check
 * for a Flickr API error. If we find one, craft a new error
 * out of that and throw it.
 * @param {Response} res
 * @returns {Boolean}
 * @throws {Error}
 */

function parseFlickr(res) {
	var body = res.body;
	var err;

	if (body && body.stat === 'fail') {
		err = new Error(body.message);
		err.stat = body.stat;
		err.code = body.code;

		throw err;
	}

	return res.status >= 200 && res.status < 300;
}

/**
 * Superagent plugin-style function to request and parse
 * JSON responses from the Flickr REST API. We need to
 * specify content-type: text/plain here to appease CORS
 * since the API does not accept application/json.
 * @param {Request} req
 * @returns {undefined}
 */

module.exports = function (req) {
	req.query({ format: 'json' });
	req.query({ nojsoncallback: 1 });
	req.type('text/plain');
	req.ok(parseFlickr);
};
