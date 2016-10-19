/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photosets.orderSets', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.orderSets({ photoset_ids: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_ids"', function () {

		assert.throws(function () {
			flickr.photosets.orderSets({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_ids"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photosets, '_').returns(Promise.resolve());

		return flickr.photosets.orderSets({ api_key: '_', photoset_ids: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photosets.orderSets', { api_key: '_', photoset_ids: '_' });
		});
	});

});
