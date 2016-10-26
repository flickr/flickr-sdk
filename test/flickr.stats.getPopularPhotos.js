var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getPopularPhotos', function () {

	it('returns a Request instance', function () {
		var req = flickr.stats.getPopularPhotos({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
