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

	it('returns a Request instance', function () {
		var req = flickr.auth.getToken({ api_key: '_', frob: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
