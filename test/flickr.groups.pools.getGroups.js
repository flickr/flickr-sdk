var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.pools.getGroups', function () {

	it('returns a Request instance', function () {
		var req = flickr.groups.pools.getGroups({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
