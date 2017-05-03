var subject = require('../request')(function auth() { /* noop */ });
var assert = require('assert');
var nock = require('nock');

describe('request', function () {

	it('adds default query string arguments', function () {
		var api = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1
		})
		.reply(200, {stat: 'ok'});

		return subject('GET', 'flickr.test.echo').then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('adds additional query string arguments', function () {
		var api = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1,
			foo: 'bar'
		})
		.reply(200, {stat: 'ok'});

		return subject('GET', 'flickr.test.echo', {foo: 'bar'}).then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('joins "extras" if passed as an array', function () {
		var api = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1,
			extras: 'foo,bar,baz'
		})
		.reply(200, {stat: 'ok'});

		return subject('GET', 'flickr.test.echo', {
			extras: [
				'foo',
				'bar',
				'baz'
			]
		}).then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('yields an error if stat=fail is returned', function () {
		var api = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1
		})
		.reply(200, {
			stat: 'fail',
			code: 100,
			message: 'Invalid API Key (Key has invalid format)'
		});

		return subject('GET', 'flickr.test.echo').then(function () {
			throw new Error('Expected errback');
		}, function (err) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(err.message, 'Invalid API Key (Key has invalid format)');
			assert.equal(err.code, 100);
		});

	});

	it('yields a SyntaxError if JSON parsing fails', function () {
		var api = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1
		})
		.reply(200, '{');

		return subject('GET', 'flickr.test.echo').then(function () {
			throw new Error('Expected errback');
		}, function (err) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(err.name, 'SyntaxError');
		});

	});

});
