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

	it('calls the correct API method');

});
