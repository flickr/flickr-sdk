var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.people.deleteCoords', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.people.deleteCoords({ user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photos.people.deleteCoords({ photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.people.deleteCoords({ photo_id: '_', user_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
