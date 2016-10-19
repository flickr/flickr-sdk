/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.auth.oauth.checkToken', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.auth.oauth.checkToken({ oauth_token: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "oauth_token"', function () {

		assert.throws(function () {
			flickr.auth.oauth.checkToken({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "oauth_token"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.auth.oauth, '_').returns(Promise.resolve());

		return flickr.auth.oauth.checkToken({ api_key: '_', oauth_token: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.auth.oauth.checkToken', { api_key: '_', oauth_token: '_' });
		});
	});

});
