var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.getWithoutGeoData', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.getWithoutGeoData({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
