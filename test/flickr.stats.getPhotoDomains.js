var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getPhotoDomains', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoDomains({ date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoDomains({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('calls the correct API method');

});
