var flickr = require('..')();
var assert = require('assert');

describe('flickr.tags.getRelated', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.tags.getRelated({ tag: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getRelated({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('calls the correct API method');

});
