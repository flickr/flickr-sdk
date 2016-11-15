var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.tags.getMostFrequentlyUsed', function () {

	it('returns a Request instance', function () {
		var req = flickr.tags.getMostFrequentlyUsed({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
