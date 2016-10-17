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

	it('calls the correct API method');

});
