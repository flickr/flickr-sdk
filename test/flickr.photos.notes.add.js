var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.notes.add', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.notes.add({ photo_id: '_',
  note_x: '_',
  note_y: '_',
  note_w: '_',
  note_h: '_',
  note_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.notes.add({ api_key: '_',
  note_x: '_',
  note_y: '_',
  note_w: '_',
  note_h: '_',
  note_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "note_x"', function () {

		assert.throws(function () {
			flickr.photos.notes.add({ api_key: '_',
  photo_id: '_',
  note_y: '_',
  note_w: '_',
  note_h: '_',
  note_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "note_x"';
		});

	});

	it('requires "note_y"', function () {

		assert.throws(function () {
			flickr.photos.notes.add({ api_key: '_',
  photo_id: '_',
  note_x: '_',
  note_w: '_',
  note_h: '_',
  note_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "note_y"';
		});

	});

	it('requires "note_w"', function () {

		assert.throws(function () {
			flickr.photos.notes.add({ api_key: '_',
  photo_id: '_',
  note_x: '_',
  note_y: '_',
  note_h: '_',
  note_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "note_w"';
		});

	});

	it('requires "note_h"', function () {

		assert.throws(function () {
			flickr.photos.notes.add({ api_key: '_',
  photo_id: '_',
  note_x: '_',
  note_y: '_',
  note_w: '_',
  note_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "note_h"';
		});

	});

	it('requires "note_text"', function () {

		assert.throws(function () {
			flickr.photos.notes.add({ api_key: '_',
  photo_id: '_',
  note_x: '_',
  note_y: '_',
  note_w: '_',
  note_h: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "note_text"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.notes.add({ api_key: '_',
  photo_id: '_',
  note_x: '_',
  note_y: '_',
  note_w: '_',
  note_h: '_',
  note_text: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
