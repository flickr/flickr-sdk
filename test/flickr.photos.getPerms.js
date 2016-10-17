var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.getPerms', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.getPerms({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.getPerms({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('calls the correct API method');

});
