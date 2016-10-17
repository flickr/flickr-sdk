var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.notes.delete', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.notes.delete({ note_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "note_id"', function () {

		assert.throws(function () {
			flickr.photos.notes.delete({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "note_id"';
		});

	});

	it('calls the correct API method');

});
