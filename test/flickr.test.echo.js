/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.test.echo', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.test.echo({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.test, '_').returns(Promise.resolve());

		return flickr.test.echo({ api_key: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.test.echo', { api_key: '_' });
		});
	});

});
