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

	it('returns a Request instance', function () {
		var req = flickr.urls.lookupUser({ api_key: '_', url: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
