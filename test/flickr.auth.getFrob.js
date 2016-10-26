var flickr = require('..')();
var assert = require('assert');

describe('flickr.auth.getFrob', function () {

	it('returns a Request instance', function () {
		var req = flickr.auth.getFrob({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
