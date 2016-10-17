var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.placesForUser', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.placesForUser({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
