var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.search', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.search({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
