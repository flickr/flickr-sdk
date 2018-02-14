var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.pools.remove', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.groups.pools.remove({
				group_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.pools.remove({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.pools.remove({
			photo_id: '_',
			group_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.groups.pools.remove');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.photo_id, '_');
		assert.equal(req.qs.group_id, '_');
	});

});
