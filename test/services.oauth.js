var OAuth = require('../services/oauth');
var request = require('superagent');
var assert = require('assert');
var sinon = require('sinon');
var nock = require('nock');

describe('services/oauth', function () {
	var subject;

	beforeEach(function () {
		subject = new OAuth('consumer key', 'consumer secret');
		sinon.stub(subject, 'timestamp').returns(499166400);
		sinon.stub(subject, 'nonce').returns('p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=');
	});

	describe('#request', function () {

		it('makes the correct API call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/oauth/request_token')
			.query({
				oauth_nonce: 'p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=',
				oauth_timestamp: 499166400,
				oauth_consumer_key: subject.consumerKey,
				oauth_signature_method: 'HMAC-SHA1',
				oauth_version: '1.0',
				oauth_callback: 'https://www.example.com/callback',
				oauth_signature: 'JC6IWgvysQg30vh3Xk6TjARQWps='
			})
			.reply(200, 'oauth_callback_confirmed=true&oauth_token=foo&oauth_token_secret=bar');

			return subject.request('https://www.example.com/callback').then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.body.oauth_callback_confirmed, 'true');
				assert.equal(res.body.oauth_token, 'foo');
				assert.equal(res.body.oauth_token_secret, 'bar');
			});

		});

	});

	describe('#verify', function () {

		it('makes the correct API call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/oauth/access_token')
			.query({
				oauth_token: 'token',
				oauth_verifier: 'verfier',
				oauth_nonce: 'p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=',
				oauth_timestamp: 499166400,
				oauth_consumer_key: subject.consumerKey,
				oauth_signature_method: 'HMAC-SHA1',
				oauth_version: '1.0',
				oauth_signature: '7+3k1AWzUyxOoNO4rymh0Txz5FA='
			})
			.reply(200, 'fullname=Jamal%20Fanaian&oauth_token=foo&oauth_token_secret=bar&user_nsid=21207597%40N07&username=jamalfanaian');

			return subject.verify('token', 'verfier', 'tokenSecret').then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.body.fullname, 'Jamal Fanaian');
				assert.equal(res.body.oauth_token, 'foo');
				assert.equal(res.body.oauth_token_secret, 'bar');
				assert.equal(res.body.user_nsid, '21207597@N07');
				assert.equal(res.body.username, 'jamalfanaian');
			});
		});

	});

	describe('#timestamp', function () {

		beforeEach(function () {
			sinon.restore(subject.timestamp);
		});

		it('returns the current system time in seconds', function () {
			assert.equal(subject.timestamp(), Math.floor(Date.now() / 1000));
		});

	});

	describe('#nonce', function () {

		beforeEach(function () {
			sinon.restore(subject.nonce);
		});

		it('returns a string', function () {
			assert.equal(typeof subject.nonce(), 'string');
		});

		it('returns 32 bytes of data', function () {
			assert.equal(Buffer.byteLength(subject.nonce(), 'base64'), 32);
		});

		it('does not return the same nonce twice', function () {
			assert.notEqual(subject.nonce(), subject.nonce());
		});

	});

	describe('#params', function () {

		it('returns OAuth 1.0 params', function () {
			var params = subject.params();

			assert.equal(params.oauth_nonce, 'p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=');
			assert.equal(params.oauth_timestamp, 499166400);
			assert.equal(params.oauth_consumer_key, subject.consumerKey);
			assert.equal(params.oauth_signature_method, 'HMAC-SHA1');
			assert.equal(params.oauth_version, '1.0');
		});

	});

	describe('#sign', function () {

		it('returns a superagent plugin', function () {
			assert.equal(typeof subject.sign(), 'function');
		});

		it('signs a request without a token secret', function () {
			var req = request('GET', 'http://www.example.com');

			req.query({ foo: '123' });
			req.query('bar=456');

			subject.sign()(req);

			assert.equal(req.qs.oauth_signature, 'lNBTzyWRRHBuoXmgK13Nht5oiKs=');
		});

		it('signs a request with a token secret', function () {
			var req = request('GET', 'http://www.example.com');

			req.query({ foo: '123' });
			req.query('bar=456');

			subject.sign('keyboard cat')(req);

			assert.equal(req.qs.oauth_signature, 'pytjoWTzMmvq13/Bai9YVX1tV9c=');
		});

	});

});
