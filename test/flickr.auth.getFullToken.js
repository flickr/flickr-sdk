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

	it('returns a Request instance', function () {
		var req = flickr.auth.getFullToken({ api_key: '_', mini_token: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
