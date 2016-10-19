var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.findByEmail', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.findByEmail({ find_email: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "find_email"', function () {

		assert.throws(function () {
			flickr.people.findByEmail({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "find_email"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.findByEmail({ api_key: '_', find_email: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
