var Subject = require('../lib/oauth');
var assert = require('assert');
var sinon = require('sinon');

describe('oauth', function () {
	var subject;

	beforeEach(function () {
		subject = new Subject('consumer key', 'consumer secret');
		sinon.stub(subject, 'timestamp').returns(499166400);
		sinon.stub(subject, 'nonce').returns('p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=');
	});

	it('requires "consumerKey" and "consumerSecret"', function () {

		assert.throws(function () {
			subject = new Subject();
		}, function (err) {
			return err.message === 'Missing required argument "consumerKey"';
		});

		assert.throws(function () {
			subject = new Subject('abc');
		}, function (err) {
			return err.message === 'Missing required argument "consumerSecret"';
		});

		assert.doesNotThrow(function () {
			subject = new Subject('abc', 'def');
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

	describe('#signatureMethod', function () {

		it('is HMAC-SHA1', function () {
			assert.equal(subject.signatureMethod, 'HMAC-SHA1');
		});

	});

	describe('#version', function () {

		it('is 1.0', function () {
			assert.equal(subject.version, '1.0');
		});

	});

	describe('#signature', function () {

		it('returns the signature without a token secret', function () {
			var signature = subject.signature('GET', 'http://www.example.com?foo=123&bar=456');

			assert.equal(signature, 'lNBTzyWRRHBuoXmgK13Nht5oiKs=');
		});

		it('returns the signature with a token secret', function () {
			var signature = subject.signature('GET', 'http://www.example.com?foo=123&bar=456', 'keyboard cat');

			assert.equal(signature, 'pytjoWTzMmvq13/Bai9YVX1tV9c=');
		});

	});

	describe('#sign', function () {

		it('signs the url without a token secret', function () {
			var url = subject.sign('GET', 'http://www.example.com?foo=123&bar=456');

			assert.equal(url, 'http://www.example.com?foo=123&bar=456&oauth_signature=lNBTzyWRRHBuoXmgK13Nht5oiKs%3D');
		});

		it('signs the url with a token secret', function () {
			var url = subject.sign('GET', 'http://www.example.com?foo=123&bar=456', 'keyboard cat');

			assert.equal(url, 'http://www.example.com?foo=123&bar=456&oauth_signature=pytjoWTzMmvq13%2FBai9YVX1tV9c%3D');
		});

	});

});
