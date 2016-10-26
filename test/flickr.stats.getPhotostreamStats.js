var flickr = require('..')();
var assert = require('assert');

describe('flickr.stats.getPhotostreamStats', function () {

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotostreamStats({});
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getPhotostreamStats({ date: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
