var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.discuss.replies.getInfo', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getInfo({
				topic_id: '_',
				reply_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "topic_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getInfo({
				group_id: '_',
				reply_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "topic_id"';
		});

	});

	it('requires "reply_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getInfo({
				group_id: '_',
				topic_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "reply_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.discuss.replies.getInfo({
			group_id: '_',
			topic_id: '_',
			reply_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.groups.discuss.replies.getInfo');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.group_id, '_');
		assert.equal(req.params.topic_id, '_');
		assert.equal(req.params.reply_id, '_');
	});

});
