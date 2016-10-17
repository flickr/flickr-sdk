/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.groups.discuss.topics.getInfo', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

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

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.groups.discuss.topics, '_').returns(Promise.resolve());

		return flickr.groups.discuss.topics.getInfo({ api_key: '_', group_id: '_', topic_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.groups.discuss.topics.getInfo', { api_key: '_', group_id: '_', topic_id: '_' });
		});
	});

});
