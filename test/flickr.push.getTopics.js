var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.push.getTopics', function () {

	it('returns a Request instance', function () {
		var req = flickr.push.getTopics({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.push.getTopics');
	});

});
