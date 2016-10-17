var flickr = require('..')();
var assert = require('assert');

describe('flickr.auth.oauth.getAccessToken', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.oauth.getAccessToken({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
