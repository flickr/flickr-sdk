/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.stats.getPopularPhotos', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.stats.getPopularPhotos({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.stats, '_').returns(Promise.resolve());

		return flickr.stats.getPopularPhotos({ api_key: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.stats.getPopularPhotos', { api_key: '_' });
		});
	});

});
