var flickr = require('..')();
var assert = require('assert');

describe('flickr.panda.getPhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.panda.getPhotos({ panda_name: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "panda_name"', function () {

		assert.throws(function () {
			flickr.panda.getPhotos({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "panda_name"';
		});

	});

	it('calls the correct API method');

});
