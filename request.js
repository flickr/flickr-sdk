var request = require('superagent');
var json = require('./plugins/json');

/**
 * Creates a new Flickr API client. This "client" is a factory
 * method that creates a new superagent request pre-configured
 * for talking to the Flickr API. You must pass your `api_key`
 * either as a string or as a field on a hash of default query
 * string params.
 * @param {(String|Object)} defaults
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

		return request(verb, 'https://api.flickr.com/services/rest')
		.query('method=' + method)
		.use(json)
		.query(defaults)
		.query(args);
	};

};
