var flickr = require('..')();
var assert = require('assert');

describe('flickr.auth.checkToken', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.checkToken({ auth_token: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "auth_token"', function () {

		assert.throws(function () {
			flickr.auth.checkToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "auth_token"';
		});

	});

	it('calls the correct API method');

});
