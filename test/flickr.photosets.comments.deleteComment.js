var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.comments.deleteComment', function () {

	it('requires "comment_id"', function () {

		assert.throws(function () {
			flickr.photosets.comments.deleteComment({});
		}, function (err) {
			return err.message === 'Missing required argument "comment_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.comments.deleteComment({ comment_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
