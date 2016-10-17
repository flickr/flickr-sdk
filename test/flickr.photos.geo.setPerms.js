var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.geo.setPerms', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({ is_public: '_',
  is_contact: '_',
  is_friend: '_',
  is_family: '_',
  photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "is_public"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({ api_key: '_',
  is_contact: '_',
  is_friend: '_',
  is_family: '_',
  photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "is_public"';
		});

	});

	it('requires "is_contact"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({ api_key: '_',
  is_public: '_',
  is_friend: '_',
  is_family: '_',
  photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "is_contact"';
		});

	});

	it('requires "is_friend"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({ api_key: '_',
  is_public: '_',
  is_contact: '_',
  is_family: '_',
  photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "is_friend"';
		});

	});

	it('requires "is_family"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({ api_key: '_',
  is_public: '_',
  is_contact: '_',
  is_friend: '_',
  photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "is_family"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.setPerms({ api_key: '_',
  is_public: '_',
  is_contact: '_',
  is_friend: '_',
  is_family: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('calls the correct API method');

});
