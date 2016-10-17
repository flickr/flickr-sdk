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

	it('calls the correct API method');

});
