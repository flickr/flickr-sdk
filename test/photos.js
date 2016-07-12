// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var photoFixture = require('./fixtures/photo-21300619575');
var groupFixture = require('./fixtures/group-2786742@N24');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;
var flickrAPIConfigNonOAuth = require('./config.js').flickrAPIConfigNonOAuth;

describe('photos namespace', function () {

	this.timeout(10000);

	/**
	 * Make a regular request with the set of methods that
	 * the SDK loads in from the public schema by default.
	 */
	it('should make a call using the default schema', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.media('21300619575')
			.get()
			.then(function (request) {
				assert.deepEqual(request.body.toString(), photoFixture.toString());
				done();
			});

	});

	/**
	 * Make a regular request with the set of methods that
	 * the SDK loads in from the public schema by default.
	 */
	it('should make a call using the default schema with no OAuth', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfigNonOAuth);

		flickrSDK
			.request()
			.groups('33051635@N00')
			.get()
			.then(function (request) {
				assert.deepEqual(request.body.toString(), groupFixture.toString());
				done();
			});

	});

	/**
	 * Make an upload request passing a file path as the photo
	 */
	it('should upload a photo to flickr', function (done) {

		// Longer timeout for this slow test
		this.timeout(10000);

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.media()
			.post({
				photo: './test/fixtures/test.png'
			})
			.then(function (request) {
				assert.equal(request.body.url, '/services/upload');
				done();
			});

	});

});
