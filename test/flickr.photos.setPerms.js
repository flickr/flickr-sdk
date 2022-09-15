var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.setPerms', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({
				is_public: '_',
				is_friend: '_',
				is_family: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "is_public"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({
				photo_id: '_',
				is_friend: '_',
				is_family: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "is_public"';
		});

	});

	it('requires "is_friend"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({
				photo_id: '_',
				is_public: '_',
				is_family: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "is_friend"';
		});

	});

	it('requires "is_family"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({
				photo_id: '_',
				is_public: '_',
				is_friend: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "is_family"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.setPerms({
			photo_id: '_',
			is_public: '_',
			is_friend: '_',
			is_family: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.setPerms');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.photo_id, '_');
		assert.equal(req.params.is_public, '_');
		assert.equal(req.params.is_friend, '_');
		assert.equal(req.params.is_family, '_');
	});

});
