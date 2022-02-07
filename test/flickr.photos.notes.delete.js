var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.notes.delete', function () {

	it('requires "note_id"', function () {

		assert.throws(function () {
			flickr.photos.notes.delete({});
		}, function (err) {
			return err.message === 'Missing required argument "note_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.notes.delete({
			note_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.notes.delete');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.note_id, '_');
	});

});
