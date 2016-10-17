var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.removeTag', function () {

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

	it('calls the correct API method');

});
