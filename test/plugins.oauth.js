var subject = require('../plugins/oauth');
var OAuth = require('../lib/oauth');
var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');
var nock = require('nock');

describe('plugins/oauth', function () {
	var sandbox;

	beforeEach(function () {
		sandbox = sinon.sandbox.create();
		sandbox.stub(OAuth.prototype, 'timestamp').returns(499166400);
		sandbox.stub(OAuth.prototype, 'nonce').returns('p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=');
	});

	afterEach(function () {
		sandbox.restore();
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

		assert.doesNotThrow(function () {
			subject('consumer key', 'consumer secret', 'oauth token', 'oauth token secret');
		});
	});

	it('signs an api call', function () {
		var api = nock('https://api.flickr.com')
			.get('/services/rest')
			.query({
				oauth_nonce: 'p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=',
				oauth_consumer_key: 'consumer key',
				oauth_token: 'oauth token',
				oauth_version: '1.0',
				oauth_timestamp: 499166400,
				oauth_signature_method: 'HMAC-SHA1',
				oauth_signature: '5WSz6hwZ6F8jbeYv3eyErif1ySo=',
				method: 'flickr.test.echo',
				foo: 'bar',
				format: 'json',
				nojsoncallback: '1'
			})
			.reply(200, {stat: 'ok'});

		var flickr = new Flickr(subject('consumer key', 'consumer secret', 'oauth token', 'oauth token secret'));

		return flickr.test.echo()
			.query({ foo: 'bar' })
			.then(function (res) {
				assert(api.isDone(), 'Expected mock to have been called');
				assert.equal(res.statusCode, 200);
				assert.equal(res.body.stat, 'ok');
			});

	});

});
