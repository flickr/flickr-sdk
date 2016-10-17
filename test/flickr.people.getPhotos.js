var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.getPhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.getPhotos({ user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.people.getPhotos({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method');

});
