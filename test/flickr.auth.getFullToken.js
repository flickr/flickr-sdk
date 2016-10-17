var flickr = require('..')();
var assert = require('assert');

describe('flickr.auth.getFullToken', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.getFullToken({ mini_token: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "mini_token"', function () {

		assert.throws(function () {
			flickr.auth.getFullToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "mini_token"';
		});

	});

	it('calls the correct API method');

});
