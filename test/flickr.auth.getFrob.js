var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.auth.getFrob', function () {

	it('returns a Request instance', function () {
		var req = flickr.auth.getFrob({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.auth.getFrob');
	});

});
