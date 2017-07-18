/*!
 * Copyright 2017 Yahoo Holdings.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

/**
 * OAuth 1.0 requires your consumer secret to sign calls,
 * and you should never expose secrets to the browser.
 * @throws {Error}
 */

module.exports = function () {
	throw new Error('OAuth 1.0 is not supported in the browser');
};
