var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.tags.getListUserPopular', function () {

	it('returns a Request instance', function () {
		var req = flickr.tags.getListUserPopular({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
