var flickr = require('..')();
var assert = require('assert');

describe('flickr.reflection.getMethodInfo', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.reflection.getMethodInfo({ method_name: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "method_name"', function () {

		assert.throws(function () {
			flickr.reflection.getMethodInfo({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "method_name"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.reflection.getMethodInfo({ api_key: '_', method_name: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
