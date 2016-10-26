var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.getWithoutGeoData', function () {

	it('returns a Request instance', function () {
		var req = flickr.photos.getWithoutGeoData({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
