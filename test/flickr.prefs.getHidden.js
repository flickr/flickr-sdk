var flickr = require('..')();
var assert = require('assert');

describe('flickr.prefs.getHidden', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.prefs.getHidden({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
