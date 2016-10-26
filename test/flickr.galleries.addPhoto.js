var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.addPhoto', function () {

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.addPhoto({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.addPhoto({ gallery_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.addPhoto({ gallery_id: '_', photo_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
