var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.comments.getList', function () {

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.comments.getList({});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.comments.getList({ photoset_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
