var flickr = require('..')();
var assert = require('assert');

describe('flickr.prefs.getSafetyLevel', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.prefs.getSafetyLevel({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
