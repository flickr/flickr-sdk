var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.cameras.getBrandModels', function () {

	it('requires "brand"', function () {

		assert.throws(function () {
			flickr.cameras.getBrandModels({});
		}, function (err) {
			return err.message === 'Missing required argument "brand"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.cameras.getBrandModels({
			brand: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.cameras.getBrandModels');
		assert.equal(req.qs.brand, '_');
	});

});
