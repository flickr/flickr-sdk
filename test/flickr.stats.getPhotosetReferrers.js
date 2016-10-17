/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.stats.getPhotosetReferrers', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetReferrers({ date: '_', domain: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetReferrers({ api_key: '_', domain: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "domain"', function () {

		assert.throws(function () {
			flickr.stats.getPhotosetReferrers({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "domain"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.stats, '_').returns(Promise.resolve());

		return flickr.stats.getPhotosetReferrers({ api_key: '_', date: '_', domain: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.stats.getPhotosetReferrers', { api_key: '_', date: '_', domain: '_' });
		});
	});

});
