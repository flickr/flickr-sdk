var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.joinRequest', function () {

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

	it('returns a Request instance', function () {
		var req = flickr.groups.joinRequest({ api_key: '_', group_id: '_', message: '_', accept_rules: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
