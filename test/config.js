// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var config = {
	flickrAPIConfig: {
		"apiKey": "68a62ca6dccd553ca49e069d4b68e92d",
		"apiSecret": "92158779258d08db",
		"accessToken": "72157660394259366-112955b6c5659e6b",
		"accessTokenSecret": "ad7f515fdef310c3"
	},
	flickrAPIConfigNonOAuth: {
		"apiKey": "68a62ca6dccd553ca49e069d4b68e92d",
		"apiSecret": "92158779258d08db"
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
