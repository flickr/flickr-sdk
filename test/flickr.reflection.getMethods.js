var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.reflection.getMethods', function () {

	it('returns a Request instance', function () {
		var req = flickr.reflection.getMethods({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
