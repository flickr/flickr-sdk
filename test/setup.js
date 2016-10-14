var nock = require('nock');

/**
 * Polyfill Promise in test environments that need it
 */

require('es6-promise').polyfill();

/**
 * Reset nock after each test
 */

afterEach(function () {
	nock.cleanAll();
});
