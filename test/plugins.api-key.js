var subject = require('../plugins/api-key');
var request = require('superagent');
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
			api_key: 'api key'
		})
		.reply(200, {
			stat: 'ok'
		});

		return request('GET', 'https://api.flickr.com/services/rest')
		.use(subject('api key'))
		.then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(res.statusCode, 200);
			assert.equal(res.body.stat, 'ok');
		});

	});

});
