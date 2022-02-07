var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.reorderPhotos', function () {

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.reorderPhotos({
				photo_ids: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "photo_ids"', function () {

		assert.throws(function () {
			flickr.photosets.reorderPhotos({
				photoset_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_ids"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.reorderPhotos({
			photoset_id: '_',
			photo_ids: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photosets.reorderPhotos');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.photoset_id, '_');
		assert.equal(req.params.photo_ids, '_');
	});

});
