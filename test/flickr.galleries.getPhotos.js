var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.galleries.getPhotos', function () {

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.getPhotos({});
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.getPhotos({ gallery_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
