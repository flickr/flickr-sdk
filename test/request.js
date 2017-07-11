var subject = require('../lib/request');
var Request = require('superagent').Request;
var assert = require('assert');
var sinon = require('sinon');

describe('lib/request', function () {

	it('returns a new Request', function () {
		assert(subject('GET', 'http://www.example.com') instanceof subject.Request);
	});

	it('extends superagent.Request', function () {
		assert(subject('GET', 'http://www.example.com') instanceof Request);
	});

	it('supports request(url, callback)', function () {
		var end = sinon.stub(subject.Request.prototype, 'end').returnsThis();
		var spy = sinon.spy();
		var req = subject('http://www.example.com', spy);

		assert(req instanceof subject.Request);
		assert.equal(req.url, 'http://www.example.com');
		assert.equal(req.method, 'GET');

		sinon.assert.calledOnce(end);
		sinon.assert.calledWith(end, spy);

		sinon.restore(end);
	});

	it('supports request(url)', function () {
		var req = subject('http://www.example.com');

		assert(req instanceof subject.Request);
		assert.equal(req.url, 'http://www.example.com');
		assert.equal(req.method, 'GET');
	});

	it('supports request(method, url)', function () {
		var req = subject('POST', 'http://www.example.com');

		assert(req instanceof subject.Request);
		assert.equal(req.url, 'http://www.example.com');
		assert.equal(req.method, 'POST');
	});

});
