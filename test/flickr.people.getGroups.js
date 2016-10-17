var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.getGroups', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.getGroups({ user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.people.getGroups({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method');

});
