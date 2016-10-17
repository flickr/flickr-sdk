var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.licenses.getInfo', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.licenses.getInfo({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
