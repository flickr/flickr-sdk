var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.stats.getCollectionDomains', function () {

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionDomains({});
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getCollectionDomains({
			date: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.stats.getCollectionDomains');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.date, '_');
	});

});
