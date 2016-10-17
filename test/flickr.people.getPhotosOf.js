var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.getPhotosOf', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.getPhotosOf({ user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.people.getPhotosOf({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method');

});
