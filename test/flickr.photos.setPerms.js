/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.setPerms', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({ photo_id: '_', is_public: '_', is_friend: '_', is_family: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({ api_key: '_', is_public: '_', is_friend: '_', is_family: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "is_public"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({ api_key: '_', photo_id: '_', is_friend: '_', is_family: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "is_public"';
		});

	});

	it('requires "is_friend"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({ api_key: '_', photo_id: '_', is_public: '_', is_family: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "is_friend"';
		});

	});

	it('requires "is_family"', function () {

		assert.throws(function () {
			flickr.photos.setPerms({ api_key: '_', photo_id: '_', is_public: '_', is_friend: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "is_family"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos, '_').returns(Promise.resolve());

		return flickr.photos.setPerms({ api_key: '_',
  photo_id: '_',
  is_public: '_',
  is_friend: '_',
  is_family: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.setPerms', { api_key: '_',
  photo_id: '_',
  is_public: '_',
  is_friend: '_',
  is_family: '_' });
		});
	});

});
