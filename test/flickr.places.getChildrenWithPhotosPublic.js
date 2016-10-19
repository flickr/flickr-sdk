/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.places.getChildrenWithPhotosPublic', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.getChildrenWithPhotosPublic({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.places, '_').returns(Promise.resolve());

		return flickr.places.getChildrenWithPhotosPublic({ api_key: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.places.getChildrenWithPhotosPublic', { api_key: '_' });
		});
	});

});
