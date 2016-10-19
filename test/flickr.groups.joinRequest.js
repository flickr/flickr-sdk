/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.groups.joinRequest', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.joinRequest({ group_id: '_', message: '_', accept_rules: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.joinRequest({ api_key: '_', message: '_', accept_rules: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('requires "message"', function () {

		assert.throws(function () {
			flickr.groups.joinRequest({ api_key: '_', group_id: '_', accept_rules: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "message"';
		});

	});

	it('requires "accept_rules"', function () {

		assert.throws(function () {
			flickr.groups.joinRequest({ api_key: '_', group_id: '_', message: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "accept_rules"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.groups, '_').returns(Promise.resolve());

		return flickr.groups.joinRequest({ api_key: '_', group_id: '_', message: '_', accept_rules: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.groups.joinRequest', { api_key: '_', group_id: '_', message: '_', accept_rules: '_' });
		});
	});

});
