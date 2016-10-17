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

	it('calls the correct API method');

});
