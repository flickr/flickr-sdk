var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.getContext', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.getContext({});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.getContext({ photo_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
