var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.geo.setContext', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({
				context: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "context"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "context"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.setContext({
			photo_id: '_',
			context: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.photos.geo.setContext');
		assert.equal(req.qs.photo_id, '_');
		assert.equal(req.qs.context, '_');
	});

});
