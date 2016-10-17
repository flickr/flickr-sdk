/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.push.getTopics', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.push.getTopics({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.push, '_').returns(Promise.resolve());

		return flickr.push.getTopics({ api_key: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.push.getTopics', { api_key: '_' });
		});
	});

});
