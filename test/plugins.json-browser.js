var subject = require('../plugins/json-browser');
var request = require('superagent/superagent'); // use browser version
var XMLHttpRequest = require('node-http-xhr');
var assert = require('assert');
var nock = require('nock');

// override getXHR to return a nodejs implementation
// of XMLHttpRequest for testing
request.getXHR = function () {
	return new XMLHttpRequest;
};

describe('plugins/json-browser', function () {

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

	it('yields an Error if JSON parsing fails', function () {
		var api = createMockResponse().reply(200, '{');

		return request('GET', 'https://api.flickr.com/services/rest')
			.use(subject)
			.then(function () {
				throw new Error('Expected errback');
			}, function (err) {
				assert(api.isDone(), 'Expected mock to have been called');
				assert.equal(err.message, 'Parser is unable to parse the response');
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
				assert.equal(err.message, 'Parser is unable to parse the response');
			});

	});

});
