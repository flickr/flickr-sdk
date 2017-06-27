var subject = require('../request')(function auth() { /* noop */ });
var Request = require('superagent').Request;
var assert = require('assert');
var parse = require('url').parse;

describe('request', function () {

	it('returns a superagent Request', function () {
		assert(subject('GET', 'flickr.test.echo') instanceof Request);
	});

	it('adds default request headers', function () {
		var req = subject('GET', 'flickr.test.echo').request();

		/*
			TODO user-agent
		*/

		assert.equal(req.getHeader('x-flickr-api-method'), 'flickr.test.echo');
	});

	it('uses the correct path');
	it('uses the correct host');
	it('can provide the host as an option');

	it('adds default query string arguments', function () {
		var req = subject('GET', 'flickr.test.echo').request();
		var url = parse(req.path, true);

		assert.equal(url.query.method, 'flickr.test.echo');
		assert.equal(url.query.format, 'json');
		assert.equal(url.query.nojsoncallback, '1');
	});

	it('adds additional query string arguments', function () {
		var req = subject('GET', 'flickr.test.echo', { foo: 'bar' }).request();
		var url = parse(req.path, true);

		assert.equal(url.query.method, 'flickr.test.echo');
		assert.equal(url.query.format, 'json');
		assert.equal(url.query.nojsoncallback, '1');
		assert.equal(url.query.foo, 'bar');
	});

	it('joins "extras" if passed as an array', function () {
		var req = subject('GET', 'flickr.test.echo', {
			extras: [
				'foo',
				'bar',
				'baz'
			]
		}).request();

		var url = parse(req.path, true);

		assert.equal(url.query.method, 'flickr.test.echo');
		assert.equal(url.query.format, 'json');
		assert.equal(url.query.nojsoncallback, '1');
		assert.equal(url.query.extras, 'foo,bar,baz');
	});

});
