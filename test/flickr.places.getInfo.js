var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.getInfo', function () {

	it('returns a Request instance', function () {
		var req = flickr.places.getInfo({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
