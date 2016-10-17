var flickr = require('..')();
var assert = require('assert');

describe('flickr.auth.getToken', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.getToken({ frob: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "frob"', function () {

		assert.throws(function () {
			flickr.auth.getToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "frob"';
		});

	});

	it('calls the correct API method');

});
