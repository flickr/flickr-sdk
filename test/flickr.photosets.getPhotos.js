var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.getPhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({ photoset_id: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({ api_key: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method');

});
