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

	describe('#params', function () {

		it('is an empty hash', function () {
			var req = subject('GET', 'http://www.example.com');

			assert.deepEqual(req.params, {});
		});

	});

	describe('#query', function () {

		beforeEach(function () {
			sinon.stub(Request.prototype, 'query').returnsThis();
		});

		afterEach(function () {
			sinon.restore(Request.prototype.query);
		});

		it('adds a query string to the params hash', function () {
			var req = subject('GET', 'http://www.example.com');
			var val = 'foo=bar';

			// returns self
			assert.strictEqual(req.query(val), req);

			sinon.assert.calledOnce(Request.prototype.query);
			sinon.assert.calledWith(Request.prototype.query, val);

			assert.deepEqual(req.params, { foo: 'bar' });
		});

		it('adds an object to the params hash', function () {
			var req = subject('GET', 'http://www.example.com');
			var val = { foo: 'bar' };

			// returns self
			assert.strictEqual(req.query(val), req);

			sinon.assert.calledOnce(Request.prototype.query);
			sinon.assert.calledWith(Request.prototype.query, val);

			assert.deepEqual(req.params, { foo: 'bar' });
		});

	});

	describe('#field', function () {

		beforeEach(function () {
			sinon.stub(Request.prototype, 'field').returnsThis();
		});

		afterEach(function () {
			sinon.restore(Request.prototype.field);
		});

		it('adds a key/value to the params hash', function () {
			var req = subject('GET', 'http://www.example.com');
			var key = 'foo';
			var val = 'bar';

			// returns self
			assert.strictEqual(req.field(key, val), req);

			sinon.assert.calledOnce(Request.prototype.field);
			sinon.assert.calledWith(Request.prototype.field, key, val);

			assert.deepEqual(req.params, { foo: 'bar' });
		});

		it('adds an object to the params hash', function () {
			var req = subject('GET', 'http://www.example.com');
			var val = { foo: 'bar' };

			// returns self
			assert.strictEqual(req.field(val), req);

			sinon.assert.calledOnce(Request.prototype.field);
			sinon.assert.calledWith(Request.prototype.field, val);

			assert.deepEqual(req.params, { foo: 'bar' });
		});

	});

	describe('#param', function () {
		var req;

		beforeEach(function () {
			req = subject('http://www.example.com');
			sinon.spy(req, 'query');
			sinon.spy(req, 'field');
		});

		it('delegates to .query() for GET requests', function () {
			var obj = {};

			req.method = 'GET';

			// returns self
			assert.strictEqual(req.param(obj), req);

			sinon.assert.calledOnce(req.query);
			sinon.assert.calledWith(req.query, obj);
		});

		it('delegates to .field() for POST requests', function () {
			var obj = {};

			req.method = 'POST';

			// returns self
			assert.strictEqual(req.param(obj), req);

			sinon.assert.calledOnce(req.field);
			sinon.assert.calledWith(req.field, obj);
		});

	});

});
