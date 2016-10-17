var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.pools.getGroups', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.pools.getGroups({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
