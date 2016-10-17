/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.licenses.setLicense', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

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

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.licenses, '_').returns(Promise.resolve());

		return flickr.photos.licenses.setLicense({ api_key: '_', photo_id: '_', license_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.licenses.setLicense', { api_key: '_', photo_id: '_', license_id: '_' });
		});
	});

});
