/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.comments.editComment', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.comments.editComment({ comment_id: '_', comment_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "comment_id"', function () {

		assert.throws(function () {
			flickr.photos.comments.editComment({ api_key: '_', comment_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment_id"';
		});

	});

	it('requires "comment_text"', function () {

		assert.throws(function () {
			flickr.photos.comments.editComment({ api_key: '_', comment_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment_text"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.comments, '_').returns(Promise.resolve());

		return flickr.photos.comments.editComment({ api_key: '_', comment_id: '_', comment_text: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.comments.editComment', { api_key: '_', comment_id: '_', comment_text: '_' });
		});
	});

});
