/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.geo.setContext', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({ photo_id: '_', context: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({ api_key: '_', context: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "context"', function () {

		assert.throws(function () {
			flickr.photos.geo.setContext({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "context"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.geo, '_').returns(Promise.resolve());

		return flickr.photos.geo.setContext({ api_key: '_', photo_id: '_', context: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.geo.setContext', { api_key: '_', photo_id: '_', context: '_' });
		});
	});

});
