var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getPhotoStats', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({ date: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('calls the correct API method');

});
