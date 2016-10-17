/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.geo.batchCorrectLocation', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.batchCorrectLocation({ lat: '_', lon: '_', accuracy: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "lat"', function () {

		assert.throws(function () {
			flickr.photos.geo.batchCorrectLocation({ api_key: '_', lon: '_', accuracy: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lat"';
		});

	});

	it('requires "lon"', function () {

		assert.throws(function () {
			flickr.photos.geo.batchCorrectLocation({ api_key: '_', lat: '_', accuracy: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lon"';
		});

	});

	it('requires "accuracy"', function () {

		assert.throws(function () {
			flickr.photos.geo.batchCorrectLocation({ api_key: '_', lat: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "accuracy"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.geo, '_').returns(Promise.resolve());

		return flickr.photos.geo.batchCorrectLocation({ api_key: '_', lat: '_', lon: '_', accuracy: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.geo.batchCorrectLocation', { api_key: '_', lat: '_', lon: '_', accuracy: '_' });
		});
	});

});
