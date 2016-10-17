var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.create', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.create({ title: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.galleries.create({ api_key: '_', description: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "description"', function () {

		assert.throws(function () {
			flickr.galleries.create({ api_key: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "description"';
		});

	});

	it('calls the correct API method');

});
