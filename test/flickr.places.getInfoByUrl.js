var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.places.getInfoByUrl', function () {

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.places.getInfoByUrl({});
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.getInfoByUrl({
			url: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.places.getInfoByUrl');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.url, '_');
	});

});
