var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.groups.discuss.topics.getList', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.discuss.topics.getList({});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.discuss.topics.getList({
			group_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.groups.discuss.topics.getList');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.group_id, '_');
	});

});
