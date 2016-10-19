var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.find', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.find({ query: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "query"', function () {

		assert.throws(function () {
			flickr.places.find({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "query"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.find({ api_key: '_', query: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
