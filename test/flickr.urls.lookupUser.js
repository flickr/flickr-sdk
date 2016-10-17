var flickr = require('..')();
var assert = require('assert');

describe('flickr.urls.lookupUser', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.urls.lookupUser({ url: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.urls.lookupUser({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('calls the correct API method');

});
