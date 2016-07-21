// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;

describe('albums', function () {

	it('should fetch photos in an album', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.albums("72157657634723246")
			.media()
			.get()
			.then(function (request) {
				assert.equal(typeof request.body['photoset_id'], "string");
				assert.equal(typeof request.body.method, "string");
				done();
			});

	});

});
