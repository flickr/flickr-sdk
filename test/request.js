var subject = require('..');
var assert = require('assert');
var nock = require('nock');

describe('request', function () {

	it('accepts api_key as a string', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: 'abcd1234',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1
		})
		.reply(200, {stat: 'ok'});

		return subject('abcd1234')('flickr.test.echo').then(function (res) {
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('accepts default params as an object', function () {
		var flickr = nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			api_key: 'abcd1234',
			method: 'flickr.test.echo',
			format: 'json',
			nojsoncallback: 1,
			foo: 'bar'
		})
		.reply(200, {stat: 'ok'});

		return subject({api_key: 'abcd1234', foo: 'bar'})('flickr.test.echo').then(function (res) {
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

	it('throws if api_key is not provided', function () {

		assert.throws(function () {
			subject();
		}, function (err) {
			return err.message === 'Required param api_key missing.';
		});

		assert.throws(function () {
			subject({ api_key: undefined });
		}, function (err) {
			return err.message === 'Required param api_key missing.';
		});

	});

});
