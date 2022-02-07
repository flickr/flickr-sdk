var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.geo.setPerms', function () {

	it('requires "is_public"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({
				is_contact: '_',
				is_friend: '_',
				is_family: '_',
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "is_public"';
		});

	});

	it('requires "is_contact"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({
				is_public: '_',
				is_friend: '_',
				is_family: '_',
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "is_contact"';
		});

	});

	it('requires "is_friend"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({
				is_public: '_',
				is_contact: '_',
				is_family: '_',
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "is_friend"';
		});

	});

	it('requires "is_family"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({
				is_public: '_',
				is_contact: '_',
				is_friend: '_',
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "is_family"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({
				is_public: '_',
				is_contact: '_',
				is_friend: '_',
				is_family: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.setPerms({
			is_public: '_',
			is_contact: '_',
			is_friend: '_',
			is_family: '_',
			photo_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.geo.setPerms');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.is_public, '_');
		assert.equal(req.params.is_contact, '_');
		assert.equal(req.params.is_friend, '_');
		assert.equal(req.params.is_family, '_');
		assert.equal(req.params.photo_id, '_');
	});

});
