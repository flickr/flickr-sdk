var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.galleries.editMeta', function () {

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editMeta({
				title: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.galleries.editMeta({
				gallery_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.editMeta({
			gallery_id: '_',
			title: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.galleries.editMeta');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.gallery_id, '_');
		assert.equal(req.qs.title, '_');
	});

});
