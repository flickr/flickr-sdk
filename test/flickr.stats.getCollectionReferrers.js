var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getCollectionReferrers', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionReferrers({ date: '_', domain: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionReferrers({ api_key: '_', domain: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "domain"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionReferrers({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "domain"';
		});

	});

	it('calls the correct API method');

});
