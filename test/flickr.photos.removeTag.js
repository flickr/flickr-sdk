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

	it('returns a Request instance', function () {
		var req = flickr.photos.removeTag({ api_key: '_', tag_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
