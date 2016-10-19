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

	it('returns a Request instance', function () {
		var req = flickr.groups.search({ api_key: '_', text: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
