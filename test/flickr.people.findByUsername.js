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

	it('calls the correct API method');

});
