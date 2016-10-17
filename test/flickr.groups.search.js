var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.search', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.search({ text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "text"', function () {

		assert.throws(function () {
			flickr.groups.search({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "text"';
		});

	});

	it('calls the correct API method');

});
