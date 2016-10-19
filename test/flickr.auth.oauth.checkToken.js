var flickr = require('..')();
var assert = require('assert');

describe('flickr.auth.oauth.checkToken', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.oauth.checkToken({ oauth_token: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "oauth_token"', function () {

		assert.throws(function () {
			flickr.auth.oauth.checkToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "oauth_token"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.auth.oauth.checkToken({ api_key: '_', oauth_token: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
