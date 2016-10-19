/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.photos.suggestions.approveSuggestion', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.approveSuggestion({ suggestion_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "suggestion_id"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.approveSuggestion({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "suggestion_id"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.photos.suggestions, '_').returns(Promise.resolve());

		return flickr.photos.suggestions.approveSuggestion({ api_key: '_', suggestion_id: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.photos.suggestions.approveSuggestion', { api_key: '_', suggestion_id: '_' });
		});
	});

});
