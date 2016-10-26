var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.getRecent', function () {

	it('returns a Request instance', function () {
		var req = flickr.photos.getRecent({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
