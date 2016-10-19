var flickr = require('..')();
var assert = require('assert');

describe('flickr.tags.getMostFrequentlyUsed', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.tags.getMostFrequentlyUsed({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.tags.getMostFrequentlyUsed({ api_key: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
