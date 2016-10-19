/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.recentlyUpdated', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.recentlyUpdated({ min_date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "min_date"', function () {

		assert.throws(function () {
			flickr.photos.recentlyUpdated({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "min_date"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos, '_').returns(Promise.resolve());

		return flickr.photos.recentlyUpdated({ api_key: '_', min_date: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.recentlyUpdated', { api_key: '_', min_date: '_' });
		});
	});

});
