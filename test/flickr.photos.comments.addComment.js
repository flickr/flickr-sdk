/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.comments.addComment', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.comments.addComment({ photo_id: '_', comment_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.comments.addComment({ api_key: '_', comment_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "comment_text"', function () {

		assert.throws(function () {
			flickr.photos.comments.addComment({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment_text"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.comments, '_').returns(Promise.resolve());

		return flickr.photos.comments.addComment({ api_key: '_', photo_id: '_', comment_text: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.comments.addComment', { api_key: '_', photo_id: '_', comment_text: '_' });
		});
	});

});
