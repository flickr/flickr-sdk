var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photos.suggestions.approveSuggestion', function () {

	it('requires "suggestion_id"', function () {

		assert.throws(function () {
			flickr.photos.suggestions.approveSuggestion({});
		}, function (err) {
			return err.message === 'Missing required argument "suggestion_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.suggestions.approveSuggestion({
			suggestion_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
