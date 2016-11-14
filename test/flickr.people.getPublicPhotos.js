var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.people.getPublicPhotos', function () {

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.people.getPublicPhotos({});
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.getPublicPhotos({ user_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
