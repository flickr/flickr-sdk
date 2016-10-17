var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.getInfoByUrl', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.getInfoByUrl({ url: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.places.getInfoByUrl({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('calls the correct API method');

});
