var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.discuss.replies.add', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.add({ group_id: '_', topic_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.add({ api_key: '_', topic_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "topic_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.add({ api_key: '_', group_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "topic_id"';
		});

	});

	it('requires "message"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.add({ api_key: '_', group_id: '_', topic_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "message"';
		});

	});

	it('calls the correct API method');

});
