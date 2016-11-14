var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.panda.getPhotos', function () {

	it('requires "panda_name"', function () {

		assert.throws(function () {
			flickr.panda.getPhotos({});
		}, function (err) {
			return err.message === 'Missing required argument "panda_name"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.panda.getPhotos({ panda_name: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
