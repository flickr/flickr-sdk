var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.resolvePlaceURL', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.resolvePlaceURL({ url: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.places.resolvePlaceURL({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.resolvePlaceURL({ api_key: '_', url: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
