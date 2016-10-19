var flickr = require('..')();
var assert = require('assert');

describe('flickr.contacts.getPublicList', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.contacts.getPublicList({ user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.contacts.getPublicList({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.contacts.getPublicList({ api_key: '_', user_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
