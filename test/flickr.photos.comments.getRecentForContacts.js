var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.comments.getRecentForContacts', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.comments.getRecentForContacts({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method');

});
