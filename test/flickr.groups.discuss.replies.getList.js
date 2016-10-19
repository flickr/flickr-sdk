var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.discuss.replies.getList', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getList({ group_id: '_', topic_id: '_', per_page: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getList({ api_key: '_', topic_id: '_', per_page: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "topic_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getList({ api_key: '_', group_id: '_', per_page: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "topic_id"';
		});

	});

	it('requires "per_page"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.getList({ api_key: '_', group_id: '_', topic_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "per_page"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.discuss.replies.getList({ api_key: '_', group_id: '_', topic_id: '_', per_page: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
