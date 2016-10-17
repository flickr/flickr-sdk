var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.placesForBoundingBox', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.placesForBoundingBox({ bbox: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "bbox"', function () {

		assert.throws(function () {
			flickr.places.placesForBoundingBox({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "bbox"';
		});

	});

	it('calls the correct API method');

});
