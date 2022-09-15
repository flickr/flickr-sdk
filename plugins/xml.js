/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var xml2js = require('xml2js');

/**
 * Custom response parse for parsing XML responses from Flickr.
 * Currently, the Upload and Replace APIs don't support JSON
 * as a response format. Until we fix this on the API side,
 * we need to parse the XML response so that the end user
 * can at least do something with it.
 * @param {Response} res
 * @param {Function} fn
 * @returns {null}
 */

function parseXML(res, fn) {
	// palmtree pray box this approach from superagent's JSON parser
	res.text = '';
	res.setEncoding('utf8');

	// collect all the response text
	res.on('data', function (chunk) {
		res.text += chunk;
	});

	res.on('end', function () {
		xml2js.parseString(res.text, {
			mergeAttrs: true,
			explicitArray: false,
			explicitRoot: false,
			explicitCharkey: true,
			charkey: '_content'
		}, function (err, body) {

			if (err) {
				return fn(new SyntaxError(err.message), body);
			}

			if (body.stat === 'fail' && body.err) {
				err = new Error(body.err.msg);
				err.stat = body.stat;
				err.code = body.err.code;
			}

			fn(err, body);
		});
	});
}

/**
 * Superagent plugin-style function to request and parse
 * XML responses from the Flickr Upload and Replace APIs.
 * @param {Request} req
 * @returns {undefined}
 */

module.exports = function (req) {
	req.buffer(true);
	req.parse(parseXML);
};
