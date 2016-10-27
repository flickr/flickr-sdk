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
	});

	describe('#request', function () {

		it('makes the correct API call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/oauth/request_token')
			.query({
				oauth_nonce: '2114a105bc84fafbd4a05333b0b7f836c5dba8db',
				oauth_timestamp: 499166400,
				oauth_consumer_key: subject.consumerKey,
				oauth_signature_method: 'HMAC-SHA1',
				oauth_version: '1.0',
				oauth_callback: 'https://www.example.com/callback',
				oauth_signature: 'n9Lnt7f7j9LrDJ0U6X30SSHSmW4='
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
				oauth_nonce: '2114a105bc84fafbd4a05333b0b7f836c5dba8db',
				oauth_timestamp: 499166400,
				oauth_consumer_key: subject.consumerKey,
				oauth_signature_method: 'HMAC-SHA1',
				oauth_version: '1.0',
				oauth_signature: 'kdVh2jMIk5AGoN/63AGQ4kexpSg='
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

	describe('#params', function () {

		it('returns OAuth 1.0 params', function () {
			var params = subject.params();

			assert.equal(params.oauth_nonce, '2114a105bc84fafbd4a05333b0b7f836c5dba8db');
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
