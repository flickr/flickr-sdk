/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photosets.comments.deleteComment', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.comments.deleteComment({ comment_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "comment_id"', function () {

		assert.throws(function () {
			flickr.photosets.comments.deleteComment({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photosets.comments, '_').returns(Promise.resolve());

		return flickr.photosets.comments.deleteComment({ api_key: '_', comment_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photosets.comments.deleteComment', { api_key: '_', comment_id: '_' });
		});
	});

});
