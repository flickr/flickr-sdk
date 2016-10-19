/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.galleries.editPhoto', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ gallery_id: '_', photo_id: '_', comment: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ api_key: '_', photo_id: '_', comment: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ api_key: '_', gallery_id: '_', comment: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "comment"', function () {

		assert.throws(function () {
			flickr.galleries.editPhoto({ api_key: '_', gallery_id: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.galleries, '_').returns(Promise.resolve());

		return flickr.galleries.editPhoto({ api_key: '_', gallery_id: '_', photo_id: '_', comment: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.galleries.editPhoto', { api_key: '_', gallery_id: '_', photo_id: '_', comment: '_' });
		});
	});

});
