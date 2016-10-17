/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.favorites.getContext', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.favorites.getContext({ photo_id: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.favorites.getContext({ api_key: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.favorites.getContext({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.favorites, '_').returns(Promise.resolve());

		return flickr.favorites.getContext({ api_key: '_', photo_id: '_', user_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.favorites.getContext', { api_key: '_', photo_id: '_', user_id: '_' });
		});
	});

});
