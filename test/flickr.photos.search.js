var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.search', function () {

	it('returns a Request instance', function () {
		var req = flickr.photos.search({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
