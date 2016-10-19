var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.discuss.topics.add', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.add({ group_id: '_', subject: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.add({ api_key: '_', subject: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "subject"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.add({ api_key: '_', group_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "subject"';
		});

	});

	it('requires "message"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.add({ api_key: '_', group_id: '_', subject: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "message"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.discuss.topics.add({ api_key: '_', group_id: '_', subject: '_', message: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
