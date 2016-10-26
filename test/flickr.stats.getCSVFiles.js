var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getCSVFiles', function () {

	it('returns a Request instance', function () {
		var req = flickr.stats.getCSVFiles({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
