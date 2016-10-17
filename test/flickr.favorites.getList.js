var flickr = require('..')();
var assert = require('assert');

describe('flickr.favorites.getList', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.favorites.getList({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
