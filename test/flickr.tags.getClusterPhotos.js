var flickr = require('..')();
var assert = require('assert');

describe('flickr.tags.getClusterPhotos', function () {

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ cluster_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('requires "cluster_id"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ tag: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "cluster_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.tags.getClusterPhotos({ tag: '_', cluster_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
