/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.tags.getRelated', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.tags.getRelated({ tag: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "tag"', function () {

		assert.throws(function () {
			flickr.tags.getRelated({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tag"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.tags, '_').returns(Promise.resolve());

		return flickr.tags.getRelated({ api_key: '_', tag: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.tags.getRelated', { api_key: '_', tag: '_' });
		});
	});

});
