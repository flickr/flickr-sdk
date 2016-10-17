/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.people.findByEmail', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.findByEmail({ find_email: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "find_email"', function () {

		assert.throws(function () {
			flickr.people.findByEmail({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "find_email"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.people, '_').returns(Promise.resolve());

		return flickr.people.findByEmail({ api_key: '_', find_email: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.people.findByEmail', { api_key: '_', find_email: '_' });
		});
	});

});
