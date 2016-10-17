/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.places.resolvePlaceId', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.resolvePlaceId({ place_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "place_id"', function () {

		assert.throws(function () {
			flickr.places.resolvePlaceId({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "place_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.places, '_').returns(Promise.resolve());

		return flickr.places.resolvePlaceId({ api_key: '_', place_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.places.resolvePlaceId', { api_key: '_', place_id: '_' });
		});
	});

});
