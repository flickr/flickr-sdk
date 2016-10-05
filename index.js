var request = require('superagent');

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
		defaults = {api_key: defaults};
	}
	if (!defaults.api_key) {
		throw new Error('Required param api_key missing.');
	}

	return function (method) {
		return request('https://api.flickr.com/services/rest')
		.query(defaults)
		.query('method=' + method)
		.query('format=json')
		.query('nojsoncallback=1');
	}

};
