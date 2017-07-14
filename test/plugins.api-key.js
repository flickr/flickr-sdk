var subject = require('../plugins/api-key');
var Flickr = require('..');
var assert = require('assert');
var nock = require('nock');

describe('plugins/api-key', function () {

	it('throws if required parameters are not provided', function () {

		assert.throws(function () {
			subject();
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

		assert.throws(function () {
			subject({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('signs an api call', function () {
		var api = nock('https://api.flickr.com')
			.get('/services/rest')
			.query({
				api_key: 'api key',
				method: 'flickr.test.echo',
				foo: 'bar',
				format: 'json',
				nojsoncallback: '1'
			})
			.reply(200, {
				stat: 'ok'
			});

		var flickr = new Flickr(subject('api key'));

		return flickr.test.echo({ foo: 'bar' })
			.then(function (res) {
				assert(api.isDone(), 'Expected mock to have been called');
				assert.equal(res.statusCode, 200);
				assert.equal(res.body.stat, 'ok');
			});

	});

});
