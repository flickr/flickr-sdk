/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.people.editCoords', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_',
  person_h: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.people.editCoords({ api_key: '_',
  user_id: '_',
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
			flickr.photos.people.editCoords({ api_key: '_',
  photo_id: '_',
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
			flickr.photos.people.editCoords({ api_key: '_',
  photo_id: '_',
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
			flickr.photos.people.editCoords({ api_key: '_',
  photo_id: '_',
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
			flickr.photos.people.editCoords({ api_key: '_',
  photo_id: '_',
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
			flickr.photos.people.editCoords({ api_key: '_',
  photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "person_h"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.people, '_').returns(Promise.resolve());

		return flickr.photos.people.editCoords({ api_key: '_',
  photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_',
  person_h: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.people.editCoords', { api_key: '_',
  photo_id: '_',
  user_id: '_',
  person_x: '_',
  person_y: '_',
  person_w: '_',
  person_h: '_' });
		});
	});

});
