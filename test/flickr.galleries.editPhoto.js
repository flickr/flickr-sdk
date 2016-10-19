var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.editPhoto', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ gallery_id: '_', photo_id: '_', comment: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ api_key: '_', photo_id: '_', comment: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ api_key: '_', gallery_id: '_', comment: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "comment"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ api_key: '_', gallery_id: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.editPhoto({ api_key: '_', gallery_id: '_', photo_id: '_', comment: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
