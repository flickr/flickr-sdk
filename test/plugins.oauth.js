var subject = require('../plugins/oauth');
var request = require('../request');
var assert = require('assert');
var time = require('timemachine');
var nock = require('nock');

describe('plugins/oauth', function () {

	beforeEach(function () {
		time.config({
			dateString: 'October 26, 1985 01:20:00 PST'
		});
	});

	afterEach(function () {
		time.reset();
	});

	it('signs an api call', function () {
		var api = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: '653e7a6ecc1d528c516cc8f92cf98611',
			foo: 'bar',
			oauth_nonce: '84145a28b1e2bfec42932a97e7cd658093cc0301',
			oauth_consumer_key: 'consumer key',
			oauth_token: 'oauth token',
			oauth_version: '1.0',
			oauth_timestamp: 499166400,
			oauth_signature_method: 'HMAC-SHA1',
			oauth_signature: 'SgZUlgoJYgxc4+LNXD7aBVrKZnc=',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: '1'
		})
		.reply(200, {stat: 'ok'});

		return request({
			api_key: '653e7a6ecc1d528c516cc8f92cf98611',
			foo: 'bar'
		})('GET', 'flickr.test.echo')
		.use(subject('consumer key', 'consumer secret', 'oauth token', 'oauth token secret'))
		.then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('throws if required parameters are not provided', function () {

		assert.throws(function () {
			subject();
		}, function (err) {
			return err.message === 'Missing required argument "consumerKey"';
		});

		assert.throws(function () {
			subject('consumer key');
		}, function (err) {
			return err.message === 'Missing required argument "consumerSecret"';
		});

		assert.throws(function () {
			subject('consumer key', 'consumer secret');
		}, function (err) {
			return err.message === 'Missing required argument "oauthToken"';
		});

		assert.throws(function () {
			subject('consumer key', 'consumer secret', 'oauth token');
		}, function (err) {
			return err.message === 'Missing required argument "oauthTokenSecret"';
		});

	});

});
