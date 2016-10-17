/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.auth.checkToken', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.checkToken({ auth_token: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "auth_token"', function () {

		assert.throws(function () {
			flickr.auth.checkToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "auth_token"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.auth, '_').returns(Promise.resolve());

		return flickr.auth.checkToken({ api_key: '_', auth_token: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.auth.checkToken', { api_key: '_', auth_token: '_' });
		});
	});

});
