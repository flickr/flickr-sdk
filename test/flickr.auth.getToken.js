var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.auth.getToken', function () {

	it('requires "frob"', function () {

		assert.throws(function () {
			flickr.auth.getToken({});
		}, function (err) {
			return err.message === 'Missing required argument "frob"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.auth.getToken({
			frob: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
