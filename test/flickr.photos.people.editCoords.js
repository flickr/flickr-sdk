var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.people.editCoords', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ user_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_',
  person_h: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ photo_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_',
  person_h: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('requires "person_x"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ photo_id: '_',
  user_id: '_',
  person_y: '_',
  person_w: '_',
  person_h: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "person_x"';
		});

	});

	it('requires "person_y"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_w: '_',
  person_h: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "person_y"';
		});

	});

	it('requires "person_w"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_y: '_',
  person_h: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "person_w"';
		});

	});

	it('requires "person_h"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "person_h"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.people.editCoords({ photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_',
  person_h: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
