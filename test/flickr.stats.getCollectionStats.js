/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.stats.getCollectionStats', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({ date: '_', collection_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({ api_key: '_', collection_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "collection_id"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionStats({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "collection_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.stats, '_').returns(Promise.resolve());

		return flickr.stats.getCollectionStats({ api_key: '_', date: '_', collection_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.stats.getCollectionStats', { api_key: '_', date: '_', collection_id: '_' });
		});
	});

});
