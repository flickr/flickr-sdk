var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.comments.getRecentForContacts', function () {

	it('returns a Request instance', function () {
		var req = flickr.photos.comments.getRecentForContacts({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
