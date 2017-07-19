var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.delete', function () {

	it('requires "photoset_id"', function () {

		assert.throws(function () {
			flickr.photosets.delete({});
		}, function (err) {
			return err.message === 'Missing required argument "photoset_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.delete({
			photoset_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.photosets.delete');
		assert.equal(req.qs.photoset_id, '_');
	});

});
