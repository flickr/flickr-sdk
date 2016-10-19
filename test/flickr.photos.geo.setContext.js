var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.geo.setContext', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({ photo_id: '_', context: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({ api_key: '_', context: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "context"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "context"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.setContext({ api_key: '_', photo_id: '_', context: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
