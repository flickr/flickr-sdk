var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.discuss.topics.getInfo', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.getInfo({ group_id: '_', topic_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.getInfo({ api_key: '_', topic_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "topic_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.getInfo({ api_key: '_', group_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "topic_id"';
		});

	});

	it('calls the correct API method');

});
