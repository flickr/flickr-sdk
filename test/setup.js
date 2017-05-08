var nock = require('nock');

/**
 * Reset nock after each test
 */

afterEach(function () {
	nock.cleanAll();
});
