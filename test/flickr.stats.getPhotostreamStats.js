var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getPhotostreamStats', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPhotostreamStats({ date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotostreamStats({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('calls the correct API method');

});
