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
		var req = flickr.photos.notes.delete({ note_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
