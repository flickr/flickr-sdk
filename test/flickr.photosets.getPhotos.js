var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.getPhotos', function () {

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({
				user_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photosets.getPhotos({
				photoset_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.getPhotos({
			photoset_id: '_',
			user_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
