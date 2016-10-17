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

	it('calls the correct API method');

});
