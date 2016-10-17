/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.places.getInfoByUrl', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.getInfoByUrl({ url: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "url"', function () {

		assert.throws(function () {
			flickr.places.getInfoByUrl({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "url"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.places, '_').returns(Promise.resolve());

		return flickr.places.getInfoByUrl({ api_key: '_', url: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.places.getInfoByUrl', { api_key: '_', url: '_' });
		});
	});

});
