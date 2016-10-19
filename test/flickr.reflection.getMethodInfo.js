/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.reflection.getMethodInfo', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.reflection.getMethodInfo({ method_name: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "method_name"', function () {

		assert.throws(function () {
			flickr.reflection.getMethodInfo({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "method_name"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.reflection, '_').returns(Promise.resolve());

		return flickr.reflection.getMethodInfo({ api_key: '_', method_name: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.reflection.getMethodInfo', { api_key: '_', method_name: '_' });
		});
	});

});
