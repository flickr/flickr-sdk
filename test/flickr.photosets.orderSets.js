var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.orderSets', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.orderSets({ photoset_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_ids"', function () {

		assert.throws(function () {
			flickr.photosets.orderSets({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_ids"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.orderSets({ api_key: '_', photoset_ids: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
