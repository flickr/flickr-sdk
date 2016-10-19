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

	it('returns a Request instance', function () {
		var req = flickr.cameras.getBrandModels({ api_key: '_', brand: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
