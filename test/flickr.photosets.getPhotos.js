/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photosets.getPhotos', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({ photoset_id: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({ api_key: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photosets, '_').returns(Promise.resolve());

		return flickr.photosets.getPhotos({ api_key: '_', photoset_id: '_', user_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photosets.getPhotos', { api_key: '_', photoset_id: '_', user_id: '_' });
		});
	});

});
