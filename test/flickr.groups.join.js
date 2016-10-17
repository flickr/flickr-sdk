var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.join', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.join({ group_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.join({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('calls the correct API method');

});
