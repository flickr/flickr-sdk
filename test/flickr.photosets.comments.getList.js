var flickr = require('..')();
var assert = require('assert');

describe('flickr.photosets.comments.getList', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photosets.comments.getList({ photoset_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.comments.getList({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('calls the correct API method');

});
