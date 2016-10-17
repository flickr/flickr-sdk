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

	it('calls the correct API method');

});
