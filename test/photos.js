// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var clone = require('clone');
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
			.then(function (response) {
				assert.deepEqual(response.body.toString(), photoFixture.toString());
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
			.then(function (response) {
				assert.deepEqual(response.body.toString(), groupFixture.toString());
				done();
			});

	});

	/**
	 * Make an upload request passing a file path as the photo
	 */
	it('should upload a photo to flickr', function (done) {

		// Longer timeout for this slow test
		this.timeout(10000);

		// Don't go via the proxy which doesn't yet support POST
		var flickrAPIConfigDirect = clone(flickrAPIConfig);
		flickrAPIConfigDirect.host = "up.flickr.com";
		flickrAPIConfigDirect.scheme = "https";

		var flickrSDK = new FlickrSDK(flickrAPIConfigDirect);

		flickrSDK
			.request()
			.media()
			.post({
				photo: './test/fixtures/test.png'
			})
			.then(function (response) {
				assert.equal(typeof response.body.photoID, "string");
				done();
			});

	});

	/**
	 * Trying to upload an invalid file should fail
	 */
	it('should fail to upload a non-photo to flickr', function (done) {

		// Don't go via the proxy which doesn't yet support POST
		var flickrAPIConfigDirect = clone(flickrAPIConfig);
		flickrAPIConfigDirect.host = "up.flickr.com";
		flickrAPIConfigDirect.scheme = "https";

		var flickrSDK = new FlickrSDK(flickrAPIConfigDirect);

		flickrSDK
			.request()
			.media()
			.post({
				photo: './test/fixtures/broken-schema.json'
			})
			.then(null, function (err) {
				assert.equal(err.code, "5");
				assert.equal(err.message, "Filetype was not recognised");
				done();
			});

	});

});
