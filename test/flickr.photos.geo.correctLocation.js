/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.geo.correctLocation', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({ photo_id: '_', foursquare_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({ api_key: '_', foursquare_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "foursquare_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.correctLocation({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "foursquare_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.geo, '_').returns(Promise.resolve());

		return flickr.photos.geo.correctLocation({ api_key: '_', photo_id: '_', foursquare_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.geo.correctLocation', { api_key: '_', photo_id: '_', foursquare_id: '_' });
		});
	});

});
