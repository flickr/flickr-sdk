// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfigNonOAuth;

describe('auth namespace', function () {

	this.timeout(10000);

	it('should return auth tokens', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.auth()
			.getRequestToken('http://www.example.com')
			.then(function (request) {
				assert.equal(request.body['oauth_none']);
				assert.ok(request.body['oauth_timestamp']);
				assert.equal(request.body['oauth_signature_method'], 'HMAC-SHA1');
				assert.equal(request.body['oauth_version'], '1.0');
				assert.ok(request.body['oauth_consumer_key']);
				assert.ok(request.body['oauth_callback']);
				assert.ok(request.body['oauth_signature']);
				done();
			});

	});

});
