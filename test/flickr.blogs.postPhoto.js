/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.blogs.postPhoto', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ photo_id: '_', title: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ api_key: '_', title: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ api_key: '_', photo_id: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "description"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({ api_key: '_', photo_id: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "description"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.blogs, '_').returns(Promise.resolve());

		return flickr.blogs.postPhoto({ api_key: '_', photo_id: '_', title: '_', description: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.blogs.postPhoto', { api_key: '_', photo_id: '_', title: '_', description: '_' });
		});
	});

});
