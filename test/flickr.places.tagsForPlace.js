/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.places.tagsForPlace', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.tagsForPlace({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.places, '_').returns(Promise.resolve());

		return flickr.places.tagsForPlace({ api_key: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.places.tagsForPlace', { api_key: '_' });
		});
	});

});
