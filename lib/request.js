var request = require('superagent');
var json = require('../plugins/json');

/**
 * Creates a new Flickr API client. This "client" is a factory
 * method that creates a new superagent request pre-configured
 * for talking to the Flickr API. You must pass an "auth"
 * supergent plugin.
 * @param {Function} auth
 * @returns {Function}
 * @see https://github.com/visionmedia/superagent
 */

module.exports = function createClient(auth, opts) {
	var host;

	if (typeof auth !== 'function') {
		throw new Error('Missing auth superagent plugin');
	}

	// options
	opts = opts || {};
	host = opts.host || 'api.flickr.com';

	return function (verb, method, args) {
		if (typeof args === 'undefined') {
			args = {};
		}

		// the API expects the "extras" param to be a
		// comma-separated list, so if we are given an
		// array we should join it
		if (Array.isArray(args.extras)) {
			args.extras = args.extras.join(',');
		}

		return request(verb, 'https://' + host + '/services/rest')
		.query('method=' + method)
		.query(args)
		.set('X-Flickr-API-Method', method)
		.use(json)
		.use(auth);
	};

};
