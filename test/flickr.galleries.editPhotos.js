var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.editPhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.editPhotos({ gallery_id: '_', primary_photo_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhotos({ api_key: '_', primary_photo_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "primary_photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhotos({ api_key: '_', gallery_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "primary_photo_id"';
		});

	});

	it('requires "photo_ids"', function () {

		assert.throws(function () {
			flickr.galleries.editPhotos({ api_key: '_', gallery_id: '_', primary_photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_ids"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.editPhotos({ api_key: '_',
  gallery_id: '_',
  primary_photo_id: '_',
  photo_ids: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
