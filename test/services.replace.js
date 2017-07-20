var Subject = require('../services/replace');
var Request = require('../lib/request').Request;
var assert = require('assert');
var sinon = require('sinon');
var parse = require('url').parse;

describe('services/replace', function () {

	function auth() { /* noop for tests */ }

	it('does not require "new"', function () {
		assert(Subject(auth, 41234567890) instanceof Subject);
	});

	it('is a superagent Request', function () {
		assert(new Subject(auth, 41234567890) instanceof Request);
	});

	it('throws if required parameters are not provided', function () {
		assert.throws(function () {
			new Subject(); // eslint-disable-line no-new
		}, function (err) {
			return err.message === 'Missing required argument "auth"';
		});

		assert.throws(function () {
			new Subject(auth); // eslint-disable-line no-new
		}, function (err) {
			return err.message === 'Missing required argument "photoID"';
		});

		assert.doesNotThrow(function () {
			new Subject(auth, 41234567890); // eslint-disable-line no-new
		});
	});

	/*
		TODO user-agent
	*/

	it('adds default request headers');

	it('uses the correct method', function () {
		var req = new Subject(auth, 41234567890);

		assert.equal(req.method, 'POST');
	});

	it('uses the correct path', function () {
		var req = new Subject(auth, 41234567890);
		var url = parse(req.url);

		assert.equal(url.pathname, '/services/replace');
	});

	it('uses the correct host', function () {
		var req = new Subject(auth, 41234567890);
		var url = parse(req.url);

		assert.equal(url.host, 'up.flickr.com');
	});

	it('adds the photo ID as a field', function () {
		var spy = sinon.spy(Request.prototype, 'field');
		var req = new Subject(auth, 41234567890, 'fnord.png');

		sinon.assert.calledTwice(spy); // also called for args
		sinon.assert.calledWith(spy, 'photo_id', 41234567890);
		sinon.assert.calledOn(spy, req);

		sinon.restore(spy);
	});

	it('attaches the photo', function () {
		var spy = sinon.spy(Request.prototype, 'attach');
		var req = new Subject(auth, 41234567890, 'fnord.png');

		sinon.assert.calledOnce(spy);
		sinon.assert.calledWith(spy, 'photo', 'fnord.png');
		sinon.assert.calledOn(spy, req);

		sinon.restore(spy);
	});

	it('adds optional arguments as fields', function () {
		var spy = sinon.stub(Request.prototype, 'field');
		var obj = { title: 'Works on MY machine!' };
		var req = new Subject(auth, 41234567890, 'fnord.png', obj);

		sinon.assert.calledTwice(spy); // also called for photo_id
		sinon.assert.calledWith(spy, obj);
		sinon.assert.calledOn(spy, req);

		sinon.restore(spy);
	});

});
