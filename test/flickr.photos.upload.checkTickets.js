/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.upload.checkTickets', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.upload.checkTickets({ tickets: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "tickets"', function () {

		assert.throws(function () {
			flickr.photos.upload.checkTickets({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "tickets"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.upload, '_').returns(Promise.resolve());

		return flickr.photos.upload.checkTickets({ api_key: '_', tickets: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.upload.checkTickets', { api_key: '_', tickets: '_' });
		});
	});

});
