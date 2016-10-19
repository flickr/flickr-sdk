var flickr = require('..')();
var assert = require('assert');

describe('flickr.favorites.add', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.favorites.add({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.favorites.add({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.favorites.add({ api_key: '_', photo_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
