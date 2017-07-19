var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.places.findByLatLon', function () {

	it('requires "lat"', function () {

		assert.throws(function () {
			flickr.places.findByLatLon({
				lon: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "lat"';
		});

	});

	it('requires "lon"', function () {

		assert.throws(function () {
			flickr.places.findByLatLon({
				lat: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "lon"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.findByLatLon({
			lat: '_',
			lon: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.places.findByLatLon');
		assert.equal(req.qs.lat, '_');
		assert.equal(req.qs.lon, '_');
	});

});
