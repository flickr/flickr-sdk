var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.create', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.create({ title: '_', primary_photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.photosets.create({ api_key: '_', primary_photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "primary_photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.create({ api_key: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "primary_photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.create({ api_key: '_', title: '_', primary_photo_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
