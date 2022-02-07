var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.places.find', function () {

	it('requires "query"', function () {

		assert.throws(function () {
			flickr.places.find({});
		}, function (err) {
			return err.message === 'Missing required argument "query"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.find({
			query: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.places.find');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.query, '_');
	});

});
