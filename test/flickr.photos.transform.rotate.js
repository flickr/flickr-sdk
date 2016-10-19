var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.transform.rotate', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({ photo_id: '_', degrees: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({ api_key: '_', degrees: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "degrees"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "degrees"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.transform.rotate({ api_key: '_', photo_id: '_', degrees: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
