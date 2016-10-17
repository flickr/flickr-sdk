var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.removePhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.removePhotos({ photoset_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.removePhotos({ api_key: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "photo_ids"', function () {

		assert.throws(function () {
			flickr.photosets.removePhotos({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_ids"';
		});

	});

	it('calls the correct API method');

});
