var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.people.findByUsername', function () {

	it('requires "username"', function () {

		assert.throws(function () {
			flickr.people.findByUsername({});
		}, function (err) {
			return err.message === 'Missing required argument "username"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.findByUsername({ username: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
