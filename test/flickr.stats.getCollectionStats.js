var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getCollectionStats', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({ date: '_', collection_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({ api_key: '_', collection_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "collection_id"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "collection_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getCollectionStats({ api_key: '_', date: '_', collection_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
