var flickr = require('..')();
var assert = require('assert');

describe('flickr.test.login', function () {

	it('returns a Request instance', function () {
		var req = flickr.test.login({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
