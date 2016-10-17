var flickr = require('..')();
var assert = require('assert');

describe('flickr.machinetags.getNamespaces', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.machinetags.getNamespaces({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
