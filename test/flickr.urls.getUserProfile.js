/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.urls.getUserProfile', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.urls.getUserProfile({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.urls, '_').returns(Promise.resolve());

		return flickr.urls.getUserProfile({ api_key: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.urls.getUserProfile', { api_key: '_' });
		});
	});

});
