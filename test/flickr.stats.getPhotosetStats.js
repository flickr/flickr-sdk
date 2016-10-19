var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getPhotosetStats', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetStats({ date: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetStats({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetStats({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getPhotosetStats({ api_key: '_', date: '_', photoset_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
