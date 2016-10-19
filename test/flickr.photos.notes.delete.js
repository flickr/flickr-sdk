/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.notes.delete', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

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

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.notes, '_').returns(Promise.resolve());

		return flickr.photos.notes.delete({ api_key: '_', note_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.notes.delete', { api_key: '_', note_id: '_' });
		});
	});

});
