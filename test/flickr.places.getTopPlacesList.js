var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.getTopPlacesList', function () {

	it('requires "place_type_id"', function () {

		assert.throws(function () {
			flickr.places.getTopPlacesList({});
		}, function (err) {
			return err.message === 'Missing required argument "place_type_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.getTopPlacesList({ place_type_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
