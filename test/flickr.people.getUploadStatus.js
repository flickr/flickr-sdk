var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.getUploadStatus', function () {

	it('returns a Request instance', function () {
		var req = flickr.people.getUploadStatus({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
