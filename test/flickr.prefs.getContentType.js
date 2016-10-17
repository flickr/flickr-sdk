var flickr = require('..')();
var assert = require('assert');

describe('flickr.prefs.getContentType', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.prefs.getContentType({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
