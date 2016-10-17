var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.upload.checkTickets', function () {

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

	it('calls the correct API method');

});
