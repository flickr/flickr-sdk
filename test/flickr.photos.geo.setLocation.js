/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.geo.setLocation', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.setLocation({ photo_id: '_', lat: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.setLocation({ api_key: '_', lat: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "lat"', function () {

		assert.throws(function () {
			flickr.photos.geo.setLocation({ api_key: '_', photo_id: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lat"';
		});

	});

	it('requires "lon"', function () {

		assert.throws(function () {
			flickr.photos.geo.setLocation({ api_key: '_', photo_id: '_', lat: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lon"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.geo, '_').returns(Promise.resolve());

		return flickr.photos.geo.setLocation({ api_key: '_', photo_id: '_', lat: '_', lon: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.geo.setLocation', { api_key: '_', photo_id: '_', lat: '_', lon: '_' });
		});
	});

});
