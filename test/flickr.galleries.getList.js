/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.galleries.getList', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.getList({ user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.galleries.getList({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.galleries, '_').returns(Promise.resolve());

		return flickr.galleries.getList({ api_key: '_', user_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.galleries.getList', { api_key: '_', user_id: '_' });
		});
	});

});
