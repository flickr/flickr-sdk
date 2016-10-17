var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.editMeta', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.editMeta({ photoset_id: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.editMeta({ api_key: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.photosets.editMeta({ api_key: '_', photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('calls the correct API method');

});
