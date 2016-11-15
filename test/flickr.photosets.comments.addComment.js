var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.comments.addComment', function () {

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.comments.addComment({ comment_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "comment_text"', function () {

		assert.throws(function () {
			flickr.photosets.comments.addComment({ photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "comment_text"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.comments.addComment({ photoset_id: '_', comment_text: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
