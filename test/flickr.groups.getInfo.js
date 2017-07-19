var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.getInfo', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.getInfo({});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.getInfo({
			group_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.groups.getInfo');
		assert.equal(req.qs.group_id, '_');
	});

});
