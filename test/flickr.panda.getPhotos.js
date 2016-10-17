/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.panda.getPhotos', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.panda.getPhotos({ panda_name: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "panda_name"', function () {

		assert.throws(function () {
			flickr.panda.getPhotos({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "panda_name"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.panda, '_').returns(Promise.resolve());

		return flickr.panda.getPhotos({ api_key: '_', panda_name: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.panda.getPhotos', { api_key: '_', panda_name: '_' });
		});
	});

});
