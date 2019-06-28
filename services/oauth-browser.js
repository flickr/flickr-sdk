/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

/**
 * OAuth 1.0 requires your consumer secret to sign calls,
 * and you should never expose secrets to the browser.
 * @constructor
 * @throws {Error}
 */

function OAuth() {
	throw new Error('OAuth 1.0 is not supported in the browser');
}

// also throw for static methods
OAuth.createPlugin = OAuth;

module.exports = OAuth;
