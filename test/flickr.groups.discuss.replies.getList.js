var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.discuss.replies.getList', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getList({
				topic_id: '_',
				per_page: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "topic_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getList({
				group_id: '_',
				per_page: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "topic_id"';
		});

	});

	it('requires "per_page"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getList({
				group_id: '_',
				topic_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "per_page"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.discuss.replies.getList({
			group_id: '_',
			topic_id: '_',
			per_page: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.groups.discuss.replies.getList');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.group_id, '_');
		assert.equal(req.qs.topic_id, '_');
		assert.equal(req.qs.per_page, '_');
	});

});
