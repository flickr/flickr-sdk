var Subject = require('../services/upload');
var Request = require('../lib/request').Request;
var assert = require('assert');
var sinon = require('sinon');
var parse = require('url').parse;

describe('services/upload', function () {

	function auth() { /* noop for tests */ }

	it('does not require "new"', function () {
		assert(Subject(auth) instanceof Subject);
	});

	it('is a superagent Request', function () {
		assert(new Subject(auth) instanceof Request);
	});

	it('throws if required parameters are not provided', function () {
		assert.throws(function () {
			new Subject(); // eslint-disable-line no-new
		}, function (err) {
			return err.message === 'Missing required argument "auth"';
		});

		assert.doesNotThrow(function () {
			new Subject(auth); // eslint-disable-line no-new
		});
	});

	/*
		TODO user-agent
	*/

	it('adds default request headers');

	it('uses the correct method', function () {
		var req = new Subject(auth);

		assert.equal(req.method, 'POST');
	});

	it('uses the correct path', function () {
		var req = new Subject(auth);
		var url = parse(req.url);

		assert.equal(url.pathname, '/services/upload');
	});

	it('uses the correct host', function () {
		var req = new Subject(auth);
		var url = parse(req.url);

		assert.equal(url.host, 'up.flickr.com');
	});

	it('attaches the photo', function () {
		var spy = sinon.spy(Request.prototype, 'attach');
		var req = new Subject(auth, 'fnord.png');

		sinon.assert.calledOnce(spy);
		sinon.assert.calledWith(spy, 'photo', 'fnord.png');
		sinon.assert.calledOn(spy, req);

		sinon.restore(spy);
	});

	it('uses a default filename if upload is not a file', function () {
		var spy = sinon.spy(Request.prototype, 'attach');
		var buf = Buffer.from('');
		var req = new Subject(auth, buf);

		sinon.assert.calledOnce(spy);
		sinon.assert.calledWith(spy, 'photo', buf, 'flickr-sdk.jpg');
		sinon.assert.calledOn(spy, req);

		sinon.restore(spy);
	});

	it('adds optional arguments as fields', function () {
		var spy = sinon.stub(Request.prototype, 'field');
		var obj = { title: 'Works on MY machine!' };
		var req = new Subject(auth, 'fnord.png', obj);

		sinon.assert.calledOnce(spy);
		sinon.assert.calledWith(spy, obj);
		sinon.assert.calledOn(spy, req);

		sinon.restore(spy);
	});

});
