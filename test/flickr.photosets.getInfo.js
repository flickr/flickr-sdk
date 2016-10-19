var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.getInfo', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.getInfo({ photoset_id: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.getInfo({ api_key: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photosets.getInfo({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.getInfo({ api_key: '_', photoset_id: '_', user_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
