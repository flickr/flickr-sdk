/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.galleries.create', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.create({ title: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.galleries.create({ api_key: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "description"', function () {

		assert.throws(function () {
			flickr.galleries.create({ api_key: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "description"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.galleries, '_').returns(Promise.resolve());

		return flickr.galleries.create({ api_key: '_', title: '_', description: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.galleries.create', { api_key: '_', title: '_', description: '_' });
		});
	});

});
