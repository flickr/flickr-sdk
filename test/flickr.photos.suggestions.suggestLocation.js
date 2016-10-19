/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.suggestions.suggestLocation', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.suggestLocation({ photo_id: '_', lat: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.suggestLocation({ api_key: '_', lat: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "lat"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.suggestLocation({ api_key: '_', photo_id: '_', lon: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lat"';
		});

	});

	it('requires "lon"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.suggestLocation({ api_key: '_', photo_id: '_', lat: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "lon"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.suggestions, '_').returns(Promise.resolve());

		return flickr.photos.suggestions.suggestLocation({ api_key: '_', photo_id: '_', lat: '_', lon: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.suggestions.suggestLocation', { api_key: '_', photo_id: '_', lat: '_', lon: '_' });
		});
	});

});
