var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.search', function () {

	it('requires "text"', function () {

		assert.throws(function () {
			flickr.groups.search({});
		}, function (err) {
			return err.message === 'Missing required argument "text"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.search({
			text: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.groups.search');
		assert.equal(req.qs.text, '_');
	});

});
