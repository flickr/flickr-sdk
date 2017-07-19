var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.favorites.getContext', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.favorites.getContext({
				user_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.favorites.getContext({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.favorites.getContext({
			photo_id: '_',
			user_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.favorites.getContext');
		assert.equal(req.qs.photo_id, '_');
		assert.equal(req.qs.user_id, '_');
	});

});
