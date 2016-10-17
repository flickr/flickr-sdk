var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.resolvePlaceId', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.resolvePlaceId({ place_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "place_id"', function () {

		assert.throws(function () {
			flickr.places.resolvePlaceId({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "place_id"';
		});

	});

	it('calls the correct API method');

});
