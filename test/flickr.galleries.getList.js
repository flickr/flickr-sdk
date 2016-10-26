var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.getList', function () {

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.galleries.getList({});
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.getList({ user_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
