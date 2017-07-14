var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.setContentType', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setContentType({
				content_type: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "content_type"', function () {

		assert.throws(function () {
			flickr.photos.setContentType({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "content_type"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.setContentType({
			photo_id: '_',
			content_type: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
