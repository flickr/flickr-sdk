var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.licenses.setLicense', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.licenses.setLicense({ photo_id: '_', license_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.licenses.setLicense({ api_key: '_', license_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "license_id"', function () {

		assert.throws(function () {
			flickr.photos.licenses.setLicense({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "license_id"';
		});

	});

	it('calls the correct API method');

});
