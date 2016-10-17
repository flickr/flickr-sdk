var flickr = require('..')();
var assert = require('assert');

describe('flickr.contacts.getList', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.contacts.getList({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
