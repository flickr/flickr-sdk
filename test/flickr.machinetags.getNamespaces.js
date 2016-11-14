var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.machinetags.getNamespaces', function () {

	it('returns a Request instance', function () {
		var req = flickr.machinetags.getNamespaces({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
