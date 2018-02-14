var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.editPhotos', function () {

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({
				primary_photo_id: '_',
				photo_ids: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "primary_photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({
				photoset_id: '_',
				photo_ids: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "primary_photo_id"';
		});

	});

	it('requires "photo_ids"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({
				photoset_id: '_',
				primary_photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_ids"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.editPhotos({
			photoset_id: '_',
			primary_photo_id: '_',
			photo_ids: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.photosets.editPhotos');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.photoset_id, '_');
		assert.equal(req.qs.primary_photo_id, '_');
		assert.equal(req.qs.photo_ids, '_');
	});

});
