/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.cameras.getBrandModels', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.cameras.getBrandModels({ brand: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "brand"', function () {

		assert.throws(function () {
			flickr.cameras.getBrandModels({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "brand"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.cameras, '_').returns(Promise.resolve());

		return flickr.cameras.getBrandModels({ api_key: '_', brand: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.cameras.getBrandModels', { api_key: '_', brand: '_' });
		});
	});

});
