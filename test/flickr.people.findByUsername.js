var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.findByUsername', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.findByUsername({ username: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "username"', function () {

		assert.throws(function () {
			flickr.people.findByUsername({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "username"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.findByUsername({ api_key: '_', username: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
