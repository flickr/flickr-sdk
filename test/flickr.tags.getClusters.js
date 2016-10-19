var flickr = require('..')();
var assert = require('assert');

describe('flickr.tags.getClusters', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.tags.getClusters({ tag: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getClusters({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.tags.getClusters({ api_key: '_', tag: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
