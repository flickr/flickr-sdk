/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.groups.discuss.replies.edit', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.edit({ group_id: '_', topic_id: '_', reply_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.edit({ api_key: '_', topic_id: '_', reply_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "topic_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.edit({ api_key: '_', group_id: '_', reply_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "topic_id"';
		});

	});

	it('requires "reply_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.edit({ api_key: '_', group_id: '_', topic_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "reply_id"';
		});

	});

	it('requires "message"', function () {

		assert.throws(function () {
			flickr.groups.discuss.replies.edit({ api_key: '_', group_id: '_', topic_id: '_', reply_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "message"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.groups.discuss.replies, '_').returns(Promise.resolve());

		return flickr.groups.discuss.replies.edit({ api_key: '_',
  group_id: '_',
  topic_id: '_',
  reply_id: '_',
  message: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.groups.discuss.replies.edit', { api_key: '_',
  group_id: '_',
  topic_id: '_',
  reply_id: '_',
  message: '_' });
		});
	});

});
