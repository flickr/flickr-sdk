// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var config = {
	flickrAPIConfig: {
		"apiKey": "01234567890123456789012345678901",
		"apiSecret": "0123456789012345",
		"accessToken": "01234567890123456-0123456789012345",
		"accessTokenSecret": "0123456789012345"
	},
	flickrAPIConfigNonOAuth: {
		"apiKey": "01234567890123456789012345678901",
		"apiSecret": "0123456789012345"
	}
};

// If we're in the testing environment point at the proxy
if (process.env['NODE_ENV'] === 'test') {
	config.flickrAPIConfig.host = "127.0.0.1:4567";
	config.flickrAPIConfig.scheme = "http";
	config.flickrAPIConfigNonOAuth.host = "127.0.0.1:4567";
	config.flickrAPIConfigNonOAuth.scheme = "http";
}

module.exports = config;
