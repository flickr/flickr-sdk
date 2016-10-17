var flickr = require('..')();
var assert = require('assert');

describe('flickr.urls.getGroup', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.urls.getGroup({ group_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.urls.getGroup({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('calls the correct API method');

});
