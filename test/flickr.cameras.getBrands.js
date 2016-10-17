var flickr = require('..')();
var assert = require('assert');

describe('flickr.cameras.getBrands', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.cameras.getBrands({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
