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

	it('returns a Request instance', function () {
		var req = flickr.auth.checkToken({ api_key: '_', auth_token: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
