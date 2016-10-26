var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.getChildrenWithPhotosPublic', function () {

	it('returns a Request instance', function () {
		var req = flickr.places.getChildrenWithPhotosPublic({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
