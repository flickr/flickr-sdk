var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.geo.batchCorrectLocation', function () {

	it('requires "lat"', function () {

		assert.throws(function () {
			flickr.photos.geo.batchCorrectLocation({ lon: '_', accuracy: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lat"';
		});

	});

	it('requires "lon"', function () {

		assert.throws(function () {
			flickr.photos.geo.batchCorrectLocation({ lat: '_', accuracy: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lon"';
		});

	});

	it('requires "accuracy"', function () {

		assert.throws(function () {
			flickr.photos.geo.batchCorrectLocation({ lat: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "accuracy"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.batchCorrectLocation({ lat: '_', lon: '_', accuracy: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
