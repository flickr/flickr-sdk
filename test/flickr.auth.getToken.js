/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.auth.getToken', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.getToken({ frob: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "frob"', function () {

		assert.throws(function () {
			flickr.auth.getToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "frob"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.auth, '_').returns(Promise.resolve());

		return flickr.auth.getToken({ api_key: '_', frob: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.auth.getToken', { api_key: '_', frob: '_' });
		});
	});

});
