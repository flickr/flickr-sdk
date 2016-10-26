var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.getListForPhoto', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.galleries.getListForPhoto({});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.getListForPhoto({ photo_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
