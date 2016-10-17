var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.getPublicPhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.getPublicPhotos({ user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.people.getPublicPhotos({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method');

});
