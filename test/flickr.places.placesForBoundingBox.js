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

	it('returns a Request instance', function () {
		var req = flickr.places.placesForBoundingBox({ api_key: '_', bbox: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
