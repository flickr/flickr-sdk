var subject = require('../plugins/xml');
var request = require('../lib/request');
var assert = require('assert');
var nock = require('nock');

describe('plugins/xml', function () {

	function createMockResponse() {
		return nock('https://up.flickr.com')
			.post('/services/upload');
	}

	it('parses an xml response', function () {
		var api = createMockResponse().reply(200,
			'<?xml version="1.0" encoding="utf-8" ?>\n' +
			'<rsp stat="ok">\n' +
				'<photoid>41234567890</photoid>\n' +
			'</rsp>\n');

		return request('POST', 'https://up.flickr.com/services/upload')
			.use(subject)
			.then(function (res) {
				assert(api.isDone(), 'Expected mock to have been called');
				assert.deepEqual(res.body, {
					stat: 'ok',
					photoid: {
						_content: '41234567890'
					}
				});
			});
	});

	it('yields a SyntaxError if XML parsing fails', function () {
		var api = createMockResponse().reply(200, '<?xml');

		return request('POST', 'https://up.flickr.com/services/upload')
			.use(subject)
			.then(function () {
				throw new Error('Expected errback');
			}, function (err) {
				assert(api.isDone(), 'Expected mock to have been called');
				assert.equal(err.name, 'SyntaxError');
			});

	});

	it('yields an error if stat=fail is returned', function () {
		var api = createMockResponse().reply(200,
			'<?xml version="1.0" encoding="utf-8" ?>\n' +
			'<rsp stat="fail">\n' +
				'<err code="8" msg="Filesize was too large" />\n' +
			'</rsp>\n');

		return request('POST', 'https://up.flickr.com/services/upload')
			.use(subject)
			.then(function () {
				throw new Error('Expected errback');
			}, function (err) {
				assert(api.isDone(), 'Expected mock to have been called');
				assert.equal(err.message, 'Filesize was too large');
				assert.equal(err.code, 8);
			});

	});

});
