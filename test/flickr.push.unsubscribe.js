/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.push.unsubscribe', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.push.unsubscribe({ topic: '_', callback: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "topic"', function () {

		assert.throws(function () {
			flickr.push.unsubscribe({ api_key: '_', callback: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "topic"';
		});

	});

	it('requires "callback"', function () {

		assert.throws(function () {
			flickr.push.unsubscribe({ api_key: '_', topic: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "callback"';
		});

	});

	it('requires "verify"', function () {

		assert.throws(function () {
			flickr.push.unsubscribe({ api_key: '_', topic: '_', callback: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "verify"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.push, '_').returns(Promise.resolve());

		return flickr.push.unsubscribe({ api_key: '_', topic: '_', callback: '_', verify: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.push.unsubscribe', { api_key: '_', topic: '_', callback: '_', verify: '_' });
		});
	});

});
