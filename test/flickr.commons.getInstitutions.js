var flickr = require('..')();
var assert = require('assert');

describe('flickr.commons.getInstitutions', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.commons.getInstitutions({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.commons.getInstitutions({ api_key: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
