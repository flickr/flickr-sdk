var subject = require('../plugins/json');
var request = require('superagent');
var assert = require('assert');
var nock = require('nock');

describe('plugins/json', function () {

	function createMockResponse() {
		return nock('https://api.flickr.com')
		.get('/services/rest')
		.query({
			format: 'json',
			nojsoncallback: 1
		});
	}

	it('parses a json response', function () {
		var api = createMockResponse().reply(200, '{"stat":"ok"}');

		return request('GET', 'https://api.flickr.com/services/rest')
		.use(subject)
		.then(function (res) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.deepEqual(res.body, { stat: 'ok' });
		});
	});

	it('yields a SyntaxError if JSON parsing fails', function () {
		var api = createMockResponse().reply(200, '{');

		return request('GET', 'https://api.flickr.com/services/rest')
		.use(subject)
		.then(function () {
			throw new Error('Expected errback');
		}, function (err) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(err.name, 'SyntaxError');
		});

	});

	it('yields an error if stat=fail is returned', function () {
		var api = createMockResponse().reply(200, {
			stat: 'fail',
			code: 100,
			message: 'Invalid API Key (Key has invalid format)'
		});

		return request('GET', 'https://api.flickr.com/services/rest')
		.use(subject)
		.then(function () {
			throw new Error('Expected errback');
		}, function (err) {
			assert(api.isDone(), 'Expected mock to have been called');
			assert.equal(err.message, 'Invalid API Key (Key has invalid format)');
			assert.equal(err.code, 100);
		});

	});

});
