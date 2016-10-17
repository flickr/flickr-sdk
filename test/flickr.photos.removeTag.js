/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.removeTag', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.removeTag({ tag_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "tag_id"', function () {

		assert.throws(function () {
			flickr.photos.removeTag({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tag_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos, '_').returns(Promise.resolve());

		return flickr.photos.removeTag({ api_key: '_', tag_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.removeTag', { api_key: '_', tag_id: '_' });
		});
	});

});
