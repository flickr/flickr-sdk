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
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.auth.getToken');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.frob, '_');
	});

});
