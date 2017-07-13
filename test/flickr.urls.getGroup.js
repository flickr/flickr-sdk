var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.urls.getGroup', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.urls.getGroup({});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.urls.getGroup({
			group_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
