var flickr = require('..')();
var assert = require('assert');

describe('flickr.collections.getTree', function () {

	it('returns a Request instance', function () {
		var req = flickr.collections.getTree({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
