var request = require('superagent');
var json = require('./plugins/json');

/**
 * Creates a new Flickr API client. This "client" is a factory
 * method that creates a new superagent request pre-configured
 * for talking to the Flickr API. You must pass an "auth"
 * supergent plugin.
 * @param {Function} auth
 * @returns {Function}
 * @see https://github.com/visionmedia/superagent
 */

module.exports = function createClient(auth) {
	if (typeof auth !== 'function') {
		throw new Error('Missing auth superagent plugin');
	}

	return function (verb, method, args) {
		if (typeof args === 'undefined') {
			args = {};
		}

		return request(verb, 'https://api.flickr.com/services/rest')
		.query('method=' + method)
		.query(args)
		.use(json)
		.use(auth);
	};

};
