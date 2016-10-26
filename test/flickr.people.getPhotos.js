var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.getPhotos', function () {

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.people.getPhotos({});
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.getPhotos({ user_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
