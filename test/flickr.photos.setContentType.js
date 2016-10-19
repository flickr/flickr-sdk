/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.setContentType', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.setContentType({ photo_id: '_', content_type: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.setContentType({ api_key: '_', content_type: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "content_type"', function () {

		assert.throws(function () {
			flickr.photos.setContentType({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "content_type"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos, '_').returns(Promise.resolve());

		return flickr.photos.setContentType({ api_key: '_', photo_id: '_', content_type: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.setContentType', { api_key: '_', photo_id: '_', content_type: '_' });
		});
	});

});
