var flickr = require('..')();
var assert = require('assert');

describe('flickr.prefs.getPrivacy', function () {

	it('returns a Request instance', function () {
		var req = flickr.prefs.getPrivacy({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
