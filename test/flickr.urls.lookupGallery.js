var flickr = require('..')();
var assert = require('assert');

describe('flickr.urls.lookupGallery', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.urls.lookupGallery({ url: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.urls.lookupGallery({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('calls the correct API method');

});
