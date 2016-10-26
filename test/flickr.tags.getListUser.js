var flickr = require('..')();
var assert = require('assert');

describe('flickr.tags.getListUser', function () {

	it('returns a Request instance', function () {
		var req = flickr.tags.getListUser({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
