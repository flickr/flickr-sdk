var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.stats.getPhotoStats', function () {

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({
				photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.stats.getPhotoStats({
				date: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getPhotoStats({
			date: '_',
			photo_id: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.stats.getPhotoStats');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.date, '_');
		assert.equal(req.qs.photo_id, '_');
	});

});
