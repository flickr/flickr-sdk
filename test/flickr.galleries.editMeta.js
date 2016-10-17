var flickr = require('..')();
var assert = require('assert');

describe('flickr.galleries.editMeta', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.galleries.editMeta({ gallery_id: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "gallery_id"', function () {

		assert.throws(function () {
			flickr.galleries.editMeta({ api_key: '_', title: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "gallery_id"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.galleries.editMeta({ api_key: '_', gallery_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('calls the correct API method');

});
