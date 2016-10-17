/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.stats.getCollectionDomains', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionDomains({ date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionDomains({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.stats, '_').returns(Promise.resolve());

		return flickr.stats.getCollectionDomains({ api_key: '_', date: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.stats.getCollectionDomains', { api_key: '_', date: '_' });
		});
	});

});
