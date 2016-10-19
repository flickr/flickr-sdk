/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.people.findByUsername', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.findByUsername({ username: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "username"', function () {

		assert.throws(function () {
			flickr.people.findByUsername({ api_key: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "username"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.people, '_').returns(Promise.resolve());

		return flickr.people.findByUsername({ api_key: '_', username: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.people.findByUsername', { api_key: '_', username: '_' });
		});
	});

});
