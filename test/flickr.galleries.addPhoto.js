/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.galleries.addPhoto', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.addPhoto({ gallery_id: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.addPhoto({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.addPhoto({ api_key: '_', gallery_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.galleries, '_').returns(Promise.resolve());

		return flickr.galleries.addPhoto({ api_key: '_', gallery_id: '_', photo_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.galleries.addPhoto', { api_key: '_', gallery_id: '_', photo_id: '_' });
		});
	});

});
