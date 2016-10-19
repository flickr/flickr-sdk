/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photosets.comments.getList', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.comments.getList({ photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.comments.getList({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photosets.comments, '_').returns(Promise.resolve());

		return flickr.photosets.comments.getList({ api_key: '_', photoset_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photosets.comments.getList', { api_key: '_', photoset_id: '_' });
		});
	});

});
