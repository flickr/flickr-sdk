var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.editMeta', function () {

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editMeta({ title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.galleries.editMeta({ gallery_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.editMeta({ gallery_id: '_', title: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
