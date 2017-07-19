var Subject = require('../services/oauth-browser');
var assert = require('assert');

describe('services/oauth-browser', function () {

	it('throws an error', function () {
		assert.throws(function () {
			new Subject(); // eslint-disable-line no-new
		}, function (err) {
			assert.equal(err.message, 'OAuth 1.0 is not supported in the browser');
			return true;
		});
	});

	describe('.createPlugin', function () {

		it('throws an error', function () {
			assert.throws(function () {
				Subject.createPlugin();
			}, function (err) {
				assert.equal(err.message, 'OAuth 1.0 is not supported in the browser');
				return true;
			});
		});

	});

});
