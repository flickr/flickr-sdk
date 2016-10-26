var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.getList', function () {

	it('returns a Request instance', function () {
		var req = flickr.photosets.getList({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
