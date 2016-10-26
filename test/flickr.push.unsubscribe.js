var flickr = require('..')();
var assert = require('assert');

describe('flickr.push.unsubscribe', function () {

	it('requires "topic"', function () {

		assert.throws(function () {
			flickr.push.unsubscribe({ callback: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "topic"';
		});

	});

	it('requires "callback"', function () {

		assert.throws(function () {
			flickr.push.unsubscribe({ topic: '_', verify: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "callback"';
		});

	});

	it('requires "verify"', function () {

		assert.throws(function () {
			flickr.push.unsubscribe({ topic: '_', callback: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "verify"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.push.unsubscribe({ topic: '_', callback: '_', verify: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
