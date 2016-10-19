/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.collections.getInfo', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.collections.getInfo({ collection_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "collection_id"', function () {

		assert.throws(function () {
			flickr.collections.getInfo({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "collection_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.collections, '_').returns(Promise.resolve());

		return flickr.collections.getInfo({ api_key: '_', collection_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.collections.getInfo', { api_key: '_', collection_id: '_' });
		});
	});

});
