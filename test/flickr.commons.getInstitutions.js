var flickr = require('..')();
var assert = require('assert');

describe('flickr.commons.getInstitutions', function () {

	it('returns a Request instance', function () {
		var req = flickr.commons.getInstitutions({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
