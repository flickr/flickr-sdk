var flickr = require('..')();
var assert = require('assert');

describe('flickr.urls.lookupGroup', function () {

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.urls.lookupGroup({});
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.urls.lookupGroup({ url: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
