var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getPhotostreamReferrers', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPhotostreamReferrers({ date: '_', domain: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotostreamReferrers({ api_key: '_', domain: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "domain"', function () {

		assert.throws(function () {
			flickr.stats.getPhotostreamReferrers({ api_key: '_', date: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "domain"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getPhotostreamReferrers({ api_key: '_', date: '_', domain: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
