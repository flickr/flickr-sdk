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
			.then(function (response) {
				assert.equal(typeof response.body.photoset, "object");
				assert.equal(typeof response.body.photoset.id, "string");
				assert.equal(typeof response.body.photoset.photo, "object");
				assert.equal(typeof response.body.photoset.title, "string");
				assert.equal(response.body.photoset.photo.length, 15);
				assert.equal(response.body.photoset.page, 1);
				done();
			});

	});

});
