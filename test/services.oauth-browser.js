var OAuth = require('../services/oauth-browser');
var assert = require('assert');

describe('services/oauth-browser', function () {

	it('throws an appropriate error', function () {
		assert.throws(function () {
			new OAuth(); // eslint-disable-line no-new
		}, function (err) {
			assert.equal(err.message, 'OAuth 1.0 is not supported in the browser');
			return true;
		});
	});

});
