/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.notes.add', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

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

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.notes, '_').returns(Promise.resolve());

		return flickr.photos.notes.add({ api_key: '_',
  photo_id: '_',
  note_x: '_',
  note_y: '_',
  note_w: '_',
  note_h: '_',
  note_text: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.notes.add', { api_key: '_',
  photo_id: '_',
  note_x: '_',
  note_y: '_',
  note_w: '_',
  note_h: '_',
  note_text: '_' });
		});
	});

});
