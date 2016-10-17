var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.people.add', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.people.add({ photo_id: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.people.add({ api_key: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photos.people.add({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method');

});
