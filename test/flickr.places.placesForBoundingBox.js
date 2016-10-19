/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.places.placesForBoundingBox', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.placesForBoundingBox({ bbox: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "bbox"', function () {

		assert.throws(function () {
			flickr.places.placesForBoundingBox({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "bbox"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.places, '_').returns(Promise.resolve());

		return flickr.places.placesForBoundingBox({ api_key: '_', bbox: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.places.placesForBoundingBox', { api_key: '_', bbox: '_' });
		});
	});

});
