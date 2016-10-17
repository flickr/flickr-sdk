var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.recentlyUpdated', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.recentlyUpdated({ min_date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "min_date"', function () {

		assert.throws(function () {
			flickr.photos.recentlyUpdated({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "min_date"';
		});

	});

	it('calls the correct API method');

});
