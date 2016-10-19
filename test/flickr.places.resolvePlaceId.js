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

	it('returns a Request instance', function () {
		var req = flickr.places.resolvePlaceId({ api_key: '_', place_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
