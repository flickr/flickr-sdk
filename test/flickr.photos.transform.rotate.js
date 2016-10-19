/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.transform.rotate', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({ photo_id: '_', degrees: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({ api_key: '_', degrees: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "degrees"', function () {

		assert.throws(function () {
			flickr.photos.transform.rotate({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "degrees"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.transform, '_').returns(Promise.resolve());

		return flickr.photos.transform.rotate({ api_key: '_', photo_id: '_', degrees: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.transform.rotate', { api_key: '_', photo_id: '_', degrees: '_' });
		});
	});

});
