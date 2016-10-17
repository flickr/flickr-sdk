var flickr = require('..')();
var assert = require('assert');

describe('flickr.push.subscribe', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.push.subscribe({ topic: '_', callback: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "topic"', function () {

		assert.throws(function () {
			flickr.push.subscribe({ api_key: '_', callback: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "topic"';
		});

	});

	it('requires "callback"', function () {

		assert.throws(function () {
			flickr.push.subscribe({ api_key: '_', topic: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "callback"';
		});

	});

	it('requires "verify"', function () {

		assert.throws(function () {
			flickr.push.subscribe({ api_key: '_', topic: '_', callback: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "verify"';
		});

	});

	it('calls the correct API method');

});
