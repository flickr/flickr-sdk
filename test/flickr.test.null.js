var flickr = require('..')();
var assert = require('assert');

describe('flickr.test.null', function () {

	it('returns a Request instance', function () {
		var req = flickr.test.null({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
