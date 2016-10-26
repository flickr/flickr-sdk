var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.placesForBoundingBox', function () {

	it('requires "bbox"', function () {

		assert.throws(function () {
			flickr.places.placesForBoundingBox({});
		}, function (err) {
			return err.message === 'Missing required argument "bbox"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.placesForBoundingBox({ bbox: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
