// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js');

describe('auth namespace', function () {

	this.timeout(10000);

	it('should request auth tokens', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig.flickrAPIConfigNonOAuth);

		flickrSDK
			.request()
			.authentication()
			.prepareRequestToken('http://www.example.com')
			.then(function (request) {
				assert.ok(request.body['oauth_nonce']);
				assert.ok(request.body['oauth_timestamp']);
				assert.equal(request.body['oauth_signature_method'], 'HMAC-SHA1');
				assert.equal(request.body['oauth_version'], '1.0');
				assert.ok(request.body['oauth_consumer_key']);
				assert.ok(request.body['oauth_callback']);
				assert.ok(request.body['oauth_signature']);
				done();
			});

	});

	it('should request access tokens', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig.flickrAPIConfigNonOAuth),
			verifier = '1234567890'; // in prod, the API gives this to us

		flickrSDK
			.request()
			.authentication()
			.authenticateUser(flickrAPIConfig.flickrAPIConfig.accessToken, flickrAPIConfig.flickrAPIConfig.accessTokenSecret, verifier)
			.then(function (request) {
				assert.ok(request.body['oauth_nonce']);
				assert.ok(request.body['oauth_timestamp']);
				assert.equal(request.body['oauth_signature_method'], 'HMAC-SHA1');
				assert.equal(request.body['oauth_version'], '1.0');
				assert.ok(request.body['oauth_consumer_key']);
				assert.equal(request.body['oauth_token'], flickrAPIConfig.flickrAPIConfig.accessToken);
				assert.equal(request.body['oauth_verifier'], verifier);
				assert.ok(request.body['oauth_signature']);
				done();
			});

	});

	it('should throw an error if you do not pass a requestTokenVerifier', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig.flickrAPIConfigNonOAuth); // in prod, the API gives this to us

		flickrSDK
			.request()
			.authentication()
			.authenticateUser(flickrAPIConfig.flickrAPIConfig.accessToken, flickrAPIConfig.flickrAPIConfig.accessTokenSecret)
			.then(null, function (err) {
				assert.equal(err.message, 'You must specify the request token verifier.');
				done();
			});
	});

});
