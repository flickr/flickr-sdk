var flickr = require('..')();
var assert = require('assert');

describe('flickr.tags.getClusterPhotos', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ tag: '_', cluster_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ api_key: '_', cluster_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('requires "cluster_id"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ api_key: '_', tag: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "cluster_id"';
		});

	});

	it('calls the correct API method');

});
