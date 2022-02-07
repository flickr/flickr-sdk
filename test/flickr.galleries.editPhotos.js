var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.galleries.editPhotos', function () {

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhotos({
				primary_photo_id: '_',
				photo_ids: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "primary_photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhotos({
				gallery_id: '_',
				photo_ids: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "primary_photo_id"';
		});

	});

	it('requires "photo_ids"', function () {

		assert.throws(function () {
			flickr.galleries.editPhotos({
				gallery_id: '_',
				primary_photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_ids"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.editPhotos({
			gallery_id: '_',
			primary_photo_id: '_',
			photo_ids: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.galleries.editPhotos');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.gallery_id, '_');
		assert.equal(req.params.primary_photo_id, '_');
		assert.equal(req.params.photo_ids, '_');
	});

});
