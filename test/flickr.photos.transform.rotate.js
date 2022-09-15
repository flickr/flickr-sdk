var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.transform.rotate', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({
				degrees: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "degrees"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "degrees"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.transform.rotate({
			photo_id: '_',
			degrees: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.transform.rotate');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.photo_id, '_');
		assert.equal(req.params.degrees, '_');
	});

});
