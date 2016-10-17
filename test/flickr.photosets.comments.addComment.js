var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.comments.addComment', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.comments.addComment({ photoset_id: '_', comment_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.comments.addComment({ api_key: '_', comment_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "comment_text"', function () {

		assert.throws(function () {
			flickr.photosets.comments.addComment({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment_text"';
		});

	});

	it('calls the correct API method');

});
