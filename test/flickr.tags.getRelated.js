var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.tags.getRelated', function () {

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getRelated({});
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.tags.getRelated({ tag: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
