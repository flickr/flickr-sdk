/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.tags.getClusterPhotos', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ tag: '_', cluster_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ api_key: '_', cluster_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('requires "cluster_id"', function () {

		assert.throws(function () {
			flickr.tags.getClusterPhotos({ api_key: '_', tag: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "cluster_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.tags, '_').returns(Promise.resolve());

		return flickr.tags.getClusterPhotos({ api_key: '_', tag: '_', cluster_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.tags.getClusterPhotos', { api_key: '_', tag: '_', cluster_id: '_' });
		});
	});

});
