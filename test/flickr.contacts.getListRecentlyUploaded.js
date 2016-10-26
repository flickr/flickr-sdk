var flickr = require('..')();
var assert = require('assert');

describe('flickr.contacts.getListRecentlyUploaded', function () {

	it('returns a Request instance', function () {
		var req = flickr.contacts.getListRecentlyUploaded({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
