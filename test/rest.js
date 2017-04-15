var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('rest service', function () {

	describe('other namespace', function () {

		it('returns a Request instance', function () {
			var req = flickr._('GET', 'flickr.test.echo', { test: '123' });

			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://api.flickr.com/services/rest');
			assert.equal(req.qs.test, '123');
		});

	});

});
