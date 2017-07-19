var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.delete', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.delete({});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.delete({
			photo_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.photos.delete');
		assert.equal(req.qs.photo_id, '_');
	});

});
