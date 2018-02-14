var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.galleries.create', function () {

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.galleries.create({
				description: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "description"', function () {

		assert.throws(function () {
			flickr.galleries.create({
				title: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "description"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.galleries.create({
			title: '_',
			description: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.galleries.create');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.title, '_');
		assert.equal(req.qs.description, '_');
	});

});
