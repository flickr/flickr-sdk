var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.galleries.getInfo', function () {

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.getInfo({});
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.getInfo({
			gallery_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.galleries.getInfo');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.gallery_id, '_');
	});

});
