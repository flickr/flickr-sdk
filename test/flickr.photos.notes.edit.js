var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.notes.edit', function () {

	it('requires "note_id"', function () {

		assert.throws(function () {
			flickr.photos.notes.edit({
				note_x: '_',
				note_y: '_',
				note_w: '_',
				note_h: '_',
				note_text: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "note_id"';
		});

	});

	it('requires "note_x"', function () {

		assert.throws(function () {
			flickr.photos.notes.edit({
				note_id: '_',
				note_y: '_',
				note_w: '_',
				note_h: '_',
				note_text: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "note_x"';
		});

	});

	it('requires "note_y"', function () {

		assert.throws(function () {
			flickr.photos.notes.edit({
				note_id: '_',
				note_x: '_',
				note_w: '_',
				note_h: '_',
				note_text: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "note_y"';
		});

	});

	it('requires "note_w"', function () {

		assert.throws(function () {
			flickr.photos.notes.edit({
				note_id: '_',
				note_x: '_',
				note_y: '_',
				note_h: '_',
				note_text: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "note_w"';
		});

	});

	it('requires "note_h"', function () {

		assert.throws(function () {
			flickr.photos.notes.edit({
				note_id: '_',
				note_x: '_',
				note_y: '_',
				note_w: '_',
				note_text: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "note_h"';
		});

	});

	it('requires "note_text"', function () {

		assert.throws(function () {
			flickr.photos.notes.edit({
				note_id: '_',
				note_x: '_',
				note_y: '_',
				note_w: '_',
				note_h: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "note_text"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.notes.edit({
			note_id: '_',
			note_x: '_',
			note_y: '_',
			note_w: '_',
			note_h: '_',
			note_text: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
