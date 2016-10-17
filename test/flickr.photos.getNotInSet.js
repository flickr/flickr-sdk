var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.getNotInSet', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.getNotInSet({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
