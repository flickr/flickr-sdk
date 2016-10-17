/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photosets.editPhotos', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ photoset_id: '_', primary_photo_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ api_key: '_', primary_photo_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "primary_photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ api_key: '_', photoset_id: '_', photo_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "primary_photo_id"';
		});

	});

	it('requires "photo_ids"', function () {

		assert.throws(function () {
			flickr.photosets.editPhotos({ api_key: '_', photoset_id: '_', primary_photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_ids"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photosets, '_').returns(Promise.resolve());

		return flickr.photosets.editPhotos({ api_key: '_',
  photoset_id: '_',
  primary_photo_id: '_',
  photo_ids: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photosets.editPhotos', { api_key: '_',
  photoset_id: '_',
  primary_photo_id: '_',
  photo_ids: '_' });
		});
	});

});
