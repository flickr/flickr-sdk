var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.suggestions.rejectSuggestion', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.rejectSuggestion({ suggestion_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "suggestion_id"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.rejectSuggestion({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "suggestion_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.suggestions.rejectSuggestion({ api_key: '_', suggestion_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
