var subject = require('../oauth');
var request = require('../request');
var assert = require('assert');
var lolex = require('lolex');
var nock = require('nock');

describe('oauth', function () {

	afterEach(function () {
		nock.cleanAll();
	});

	it('signs an api call', function () {
		// fixed time to ensure nonce matches test
		var time = 1305583871;
		var clock = lolex.install(time * 1000);
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: '653e7a6ecc1d528c516cc8f92cf98611',
			foo: 'bar',
			oauth_consumer_key: '653e7a6ecc1d528c516cc8f92cf98611',
			oauth_token: '123',
			oauth_version: '1.0',
			oauth_timestamp: time,
			oauth_nonce: '71b4589b225f5df829a656bb955b9291b6c59d1e',
			oauth_signature_method: 'HMAC-SHA1',
			oauth_signature: '9pINY%2F2Mxk%2Fr4xwJFFnj4%2BopOTU%3D',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: '1'
		})
		.reply(200, {stat: 'ok'});

		return request({
			api_key: '653e7a6ecc1d528c516cc8f92cf98611',
			foo: 'bar'
		})('flickr.test.echo')
		.use(subject({
			accessToken: '123',
			accessTokenSecret: '456',
			apiSecret: '54321'
		}))
		.then(function (res) {
			clock.uninstall();
			assert(flickr.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('throws if oauth config is not provided', function () {

		assert.throws(function () {
			subject('12345');
		}, function (err) {
			return err.message === 'You must provide a config object for oauth.';
		});

		assert.throws(function () {
			subject();
		}, function (err) {
			return err.message === 'You must provide a config object for oauth.';
		});

	});

	it('throws if oauth config is not complete', function () {

		assert.throws(function () {
			subject({});
		}, function (err) {
			return err.message === 'You must provide an access token for oauth.';
		});

		assert.throws(function () {
			subject({
				accessToken: '123'
			});
		}, function (err) {
			return err.message === 'You must provide an access token secret for oauth.';
		});

		assert.throws(function () {
			subject({
				accessToken: '123',
				accessTokenSecret: '456'
			});
		}, function (err) {
			return err.message === 'You must provide the api secret for oauth.';
		});

	});

});
