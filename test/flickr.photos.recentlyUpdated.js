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

	it('returns a Request instance', function () {
		var req = flickr.photos.recentlyUpdated({ api_key: '_', min_date: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
