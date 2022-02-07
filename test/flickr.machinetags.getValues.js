var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.machinetags.getValues', function () {

	it('requires "namespace"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({
				predicate: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "namespace"';
		});

	});

	it('requires "predicate"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({
				namespace: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "predicate"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.machinetags.getValues({
			namespace: '_',
			predicate: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.machinetags.getValues');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.namespace, '_');
		assert.equal(req.params.predicate, '_');
	});

});
