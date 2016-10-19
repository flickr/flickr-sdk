var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.getAllContexts', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.getAllContexts({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.getAllContexts({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.getAllContexts({ api_key: '_', photo_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
