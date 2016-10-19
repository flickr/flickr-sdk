var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.geo.correctLocation', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({ photo_id: '_', foursquare_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({ api_key: '_', foursquare_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "foursquare_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "foursquare_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.correctLocation({ api_key: '_', photo_id: '_', foursquare_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
