var flickr = require('..')();
var assert = require('assert');

describe('flickr.machinetags.getValues', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({ namespace: '_', predicate: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "namespace"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({ api_key: '_', predicate: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "namespace"';
		});

	});

	it('requires "predicate"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({ api_key: '_', namespace: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "predicate"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.machinetags.getValues({ api_key: '_', namespace: '_', predicate: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
