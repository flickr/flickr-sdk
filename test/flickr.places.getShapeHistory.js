var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.places.getShapeHistory', function () {

	it('returns a Request instance', function () {
		var req = flickr.places.getShapeHistory({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});