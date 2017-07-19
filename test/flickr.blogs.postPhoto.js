var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.blogs.postPhoto', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({
				title: '_',
				description: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({
				photo_id: '_',
				description: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "description"', function () {

		assert.throws(function () {
			flickr.blogs.postPhoto({
				photo_id: '_',
				title: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "description"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.blogs.postPhoto({
			photo_id: '_',
			title: '_',
			description: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.blogs.postPhoto');
		assert.equal(req.qs.photo_id, '_');
		assert.equal(req.qs.title, '_');
		assert.equal(req.qs.description, '_');
	});

});
