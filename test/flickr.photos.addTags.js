/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.addTags', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.addTags({ photo_id: '_', tags: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.addTags({ api_key: '_', tags: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "tags"', function () {

		assert.throws(function () {
			flickr.photos.addTags({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tags"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos, '_').returns(Promise.resolve());

		return flickr.photos.addTags({ api_key: '_', photo_id: '_', tags: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.addTags', { api_key: '_', photo_id: '_', tags: '_' });
		});
	});

});
