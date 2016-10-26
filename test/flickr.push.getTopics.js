var flickr = require('..')();
var assert = require('assert');

describe('flickr.push.getTopics', function () {

	it('returns a Request instance', function () {
		var req = flickr.push.getTopics({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
