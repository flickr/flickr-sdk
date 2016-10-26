var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.browse', function () {

	it('returns a Request instance', function () {
		var req = flickr.groups.browse({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
