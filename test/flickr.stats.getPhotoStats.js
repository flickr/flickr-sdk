/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.stats.getPhotoStats', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({ date: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.stats, '_').returns(Promise.resolve());

		return flickr.stats.getPhotoStats({ api_key: '_', date: '_', photo_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.stats.getPhotoStats', { api_key: '_', date: '_', photo_id: '_' });
		});
	});

});
