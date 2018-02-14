var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.people.findByEmail', function () {

	it('requires "find_email"', function () {

		assert.throws(function () {
			flickr.people.findByEmail({});
		}, function (err) {
			return err.message === 'Missing required argument "find_email"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.findByEmail({
			find_email: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.people.findByEmail');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.find_email, '_');
	});

});
