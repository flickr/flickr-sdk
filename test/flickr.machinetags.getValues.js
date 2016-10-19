/* global Promise */

var Flickr = require('..');
var assert = require('assert');
var sinon = require('sinon');

describe('flickr.machinetags.getValues', function () {
	var flickr;

	beforeEach(function () {
		flickr = new Flickr();
	});

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({ namespace: '_', predicate: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "namespace"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({ api_key: '_', predicate: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "namespace"';
		});

	});

	it('requires "predicate"', function () {

		assert.throws(function () {
			flickr.machinetags.getValues({ api_key: '_', namespace: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "predicate"';
		});

	});

	it('calls the correct API method', function () {
		var request = sinon.stub(flickr.machinetags, '_').returns(Promise.resolve());

		return flickr.machinetags.getValues({ api_key: '_', namespace: '_', predicate: '_' })
		.then(function () {
			sinon.assert.calledOnce(request);
			sinon.assert.calledWith(request, 'flickr.machinetags.getValues', { api_key: '_', namespace: '_', predicate: '_' });
		});
	});

});
