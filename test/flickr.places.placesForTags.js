var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.placesForTags', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.placesForTags({ place_type_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "place_type_id"', function () {

		assert.throws(function () {
			flickr.places.placesForTags({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "place_type_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.placesForTags({ api_key: '_', place_type_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
