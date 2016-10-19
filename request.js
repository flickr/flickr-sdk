var request = require('superagent');
var parseJSON = require('superagent/lib/node/parsers/json');

/**
 * Custom response parser routine to handle Flickr API-style
 * error responses. The Flickr API has a whole bunch of client
 * error codes, but they all come back as HTTP 200 responses.
 * Here, we extend the normal JSON response parser and check
 * for a Flickr API error. If we find one, craft a new error
 * out of that and yield it.
 * @param {Response} res
 * @param {Function} fn
 * @returns {null}
 */

function parseFlickr(res, fn) {
	parseJSON(res, function (err, body) {
		if (err) {
			return fn(err, body);
		}

		if (body.stat === 'fail') {
			err = new Error(body.message);
			err.stat = body.stat;
			err.code = body.code;
		}

		fn(err, body);
	});
}

/**
 * Creates a new Flickr API client. This "client" is a factory
 * method that creates a new superagent request pre-configured
 * for talking to the Flickr API. You must pass your `api_key`
 * either as a string or as a field on a hash of default query
 * string params.
 * @param {String|Object} defaults
 * @returns {Function}
 * @see https://github.com/visionmedia/superagent
 */

module.exports = function createClient(defaults) {
	if (typeof defaults === 'undefined') {
		defaults = {};
	}
	if (typeof defaults === 'string') {
		defaults = { api_key: defaults };
	}

	return function (verb, method, args) {
		if (typeof args === 'undefined') {
			args = {};
		}
		if (!defaults.api_key && !args.api_key) {
			throw new Error('Missing required argument "api_key"');
		}

		return request(verb, 'https://api.flickr.com/services/rest')
		.query(defaults)
		.query('method=' + method)
		.query('format=json')
		.query('nojsoncallback=1')
		.query(args)
		.parse(parseFlickr);
	};

};
