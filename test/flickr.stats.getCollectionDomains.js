var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getCollectionDomains', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionDomains({ date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionDomains({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('calls the correct API method');

});
