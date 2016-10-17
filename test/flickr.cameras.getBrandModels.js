var flickr = require('..')();
var assert = require('assert');

describe('flickr.cameras.getBrandModels', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.cameras.getBrandModels({ brand: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "brand"', function () {

		assert.throws(function () {
			flickr.cameras.getBrandModels({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "brand"';
		});

	});

	it('calls the correct API method');

});
