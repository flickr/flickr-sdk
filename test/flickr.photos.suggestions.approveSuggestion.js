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
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.photos.suggestions.approveSuggestion');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.suggestion_id, '_');
	});

});
