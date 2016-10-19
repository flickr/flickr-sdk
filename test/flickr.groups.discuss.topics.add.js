/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.groups.discuss.topics.add', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

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

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.groups.discuss.topics, '_').returns(Promise.resolve());

		return flickr.groups.discuss.topics.add({ api_key: '_', group_id: '_', subject: '_', message: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.groups.discuss.topics.add', { api_key: '_', group_id: '_', subject: '_', message: '_' });
		});
	});

});
