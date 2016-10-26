var flickr = require('..')();
var assert = require('assert');

describe('flickr.urls.getUserPhotos', function () {

	it('returns a Request instance', function () {
		var req = flickr.urls.getUserPhotos({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
