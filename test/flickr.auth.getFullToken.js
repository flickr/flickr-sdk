/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.auth.getFullToken', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.getFullToken({ mini_token: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "mini_token"', function () {

		assert.throws(function () {
			flickr.auth.getFullToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "mini_token"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.auth, '_').returns(Promise.resolve());

		return flickr.auth.getFullToken({ api_key: '_', mini_token: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.auth.getFullToken', { api_key: '_', mini_token: '_' });
		});
	});

});
