var flickr = require('..')();
var assert = require('assert');

describe('flickr.urls.lookupGroup', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.urls.lookupGroup({ url: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.urls.lookupGroup({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('calls the correct API method');

});
