var flickr = require('..')();
var assert = require('assert');

describe('flickr.blogs.postPhoto', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ photo_id: '_', title: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ api_key: '_', title: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ api_key: '_', photo_id: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "description"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ api_key: '_', photo_id: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "description"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.blogs.postPhoto({ api_key: '_', photo_id: '_', title: '_', description: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
