
var subject = require('../request');
var subjectOAuth = require('../oauth');
var assert = require('assert');
var nock = require('nock');
var lolex = require('lolex');

describe('request', function () {

	afterEach(function () {
		nock.cleanAll();
	});

	it('accepts api_key as a string', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: 'abcd1234',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1
		})
		.reply(200, {stat: 'ok'});

		return subject('abcd1234')('flickr.test.echo').then(function (res) {
			assert(flickr.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('accepts default params as an object', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: 'abcd1234',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1,
			foo: 'bar'
		})
		.reply(200, {stat: 'ok'});

		return subject({api_key: 'abcd1234', foo: 'bar'})('flickr.test.echo').then(function (res) {
			assert(flickr.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('should accept oauth middleware and sign call', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: '653e7a6ecc1d528c516cc8f92cf98611',
			foo: 'bar',
			oauth_consumer_key: '653e7a6ecc1d528c516cc8f92cf98611',
			oauth_token: '123',
			oauth_version: '1.0',
			oauth_timestamp: 1305583871,
			oauth_nonce: '71b4589b225f5df829a656bb955b9291b6c59d1e',
			oauth_signature_method: 'HMAC-SHA1',
			oauth_signature: '9pINY%2F2Mxk%2Fr4xwJFFnj4%2BopOTU%3D',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: '1'
		})
		.reply(200, {stat: 'ok'}),
		clock = lolex.install(1305583871000); // fixed time to ensure nonce matches test

		return subject({
			api_key: '653e7a6ecc1d528c516cc8f92cf98611',
			foo: 'bar'
		})('flickr.test.echo')
		.use(subjectOAuth({
			accessToken: '123',
			accessTokenSecret: '456',
			apiSecret: '54321'
		}))
		.then(function (res) {
			assert(flickr.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
			clock.uninstall();
		});

	});

	it('throws if api_key is not provided', function () {

		assert.throws(function () {
			subject();
		}, function (err) {
			return err.message === 'Required param api_key missing.';
		});

		assert.throws(function () {
			subject({ api_key: undefined });
		}, function (err) {
			return err.message === 'Required param api_key missing.';
		});

	});

	it('throws if oauth config is not provided', function () {

		assert.throws(function () {
			subject({ api_key: '12345' })
			.use(subjectOAuth('12345'));
		}, function (err) {
			return err.message === 'You must provide a config object for oauth.';
		});

		assert.throws(function () {
			subject({ api_key: '12345' })
			.use(subjectOAuth());
		}, function (err) {
			return err.message === 'You must provide a config object for oauth.';
		});

	});

	it('throws if oauth config is not complete', function () {

		assert.throws(function () {
			subject({ api_key: '12345' })
			.use(subjectOAuth({}));
		}, function (err) {
			return err.message === 'You must provide an access token for oauth.';
		});

		assert.throws(function () {
			subject({ api_key: '12345' })
			.use(subjectOAuth({
				accessToken: '123'
			}));
		}, function (err) {
			return err.message === 'You must provide an access token secret for oauth.';
		});

		assert.throws(function () {
			subject({ api_key: '12345' })
			.use(subjectOAuth({
				accessToken: '123',
				accessTokenSecret: '456'
			}));
		}, function (err) {
			return err.message === 'You must provide the api secret for oauth.';
		});

	});

	it('yields an error if stat=fail is returned', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: 'abcd1234',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1
		})
		.reply(200, {
			stat: 'fail',
			code: 100,
			message: 'Invalid API Key (Key has invalid format)'
		});

		return subject('abcd1234')('flickr.test.echo').then(function () {
			throw new Error('Expected errback');
		}, function (err) {
			assert(flickr.isDone(), 'Expected mock to have been called');
			assert.equal(err.message, 'Invalid API Key (Key has invalid format)');
			assert.equal(err.code, 100);
		});

	});

	it('adds additional query string arguments', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: 'abcd1234',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1,
			foo: 'bar'
		})
		.reply(200, {stat: 'ok'});

		return subject('abcd1234')('flickr.test.echo', {foo: 'bar'}).then(function (res) {
			assert(flickr.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('throws if json parsing fails', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: 'abcd1234',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1
		})
		.reply(200, '{');

		return subject('abcd1234')('flickr.test.echo').then(function () {
			throw new Error('Expected errback');
		}, function (err) {
			assert(flickr.isDone(), 'Expected mock to have been called');
			assert.equal(err.message, 'Unexpected end of input');
		});

	});

});
