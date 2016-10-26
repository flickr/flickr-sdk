var flickr = require('..')();
var assert = require('assert');

describe('flickr.push.getSubscriptions', function () {

	it('returns a Request instance', function () {
		var req = flickr.push.getSubscriptions({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
