var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.setSafetyLevel', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setSafetyLevel({});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.setSafetyLevel({
			photo_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.setSafetyLevel');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.photo_id, '_');
	});

});
