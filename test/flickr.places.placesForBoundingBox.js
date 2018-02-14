var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.places.placesForBoundingBox', function () {

	it('requires "bbox"', function () {

		assert.throws(function () {
			flickr.places.placesForBoundingBox({});
		}, function (err) {
			return err.message === 'Missing required argument "bbox"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.placesForBoundingBox({
			bbox: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.places.placesForBoundingBox');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.bbox, '_');
	});

});
