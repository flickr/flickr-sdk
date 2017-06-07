var subject = require('../plugins/oauth-browser');
var assert = require('assert');

describe('plugins/oauth-browser', function () {

	it('throws an appropriate error', function () {
		assert.throws(function () {
			subject();
		}, function (err) {
			assert.equal(err.message, 'OAuth 1.0 is not supported in the browser');
			return true;
		});
	});

});
