var flickr = require('..')();
var assert = require('assert');

describe('flickr.contacts.getListRecentlyUploaded', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.contacts.getListRecentlyUploaded({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.contacts.getListRecentlyUploaded({ api_key: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
