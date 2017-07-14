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
	});

});
