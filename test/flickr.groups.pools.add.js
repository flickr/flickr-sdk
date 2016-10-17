/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.groups.pools.add', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.pools.add({ photo_id: '_', group_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.groups.pools.add({ api_key: '_', group_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.pools.add({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.groups.pools, '_').returns(Promise.resolve());

		return flickr.groups.pools.add({ api_key: '_', photo_id: '_', group_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.groups.pools.add', { api_key: '_', photo_id: '_', group_id: '_' });
		});
	});

});
