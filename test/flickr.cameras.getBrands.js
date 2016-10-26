var flickr = require('..')();
var assert = require('assert');

describe('flickr.cameras.getBrands', function () {

	it('returns a Request instance', function () {
		var req = flickr.cameras.getBrands({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
