/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.groups.search', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.groups.search({ text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "text"', function () {

		assert.throws(function () {
			flickr.groups.search({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "text"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.groups, '_').returns(Promise.resolve());

		return flickr.groups.search({ api_key: '_', text: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.groups.search', { api_key: '_', text: '_' });
		});
	});

});
