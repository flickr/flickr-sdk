var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.galleries.editPhoto', function () {

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({
				photo_id: '_',
				comment: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({
				gallery_id: '_',
				comment: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "comment"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({
				gallery_id: '_',
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "comment"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.editPhoto({
			gallery_id: '_',
			photo_id: '_',
			comment: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.galleries.editPhoto');
		assert.equal(req.qs.gallery_id, '_');
		assert.equal(req.qs.photo_id, '_');
		assert.equal(req.qs.comment, '_');
	});

});
