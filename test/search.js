// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var clone = require('clone');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = clone(require('./config.js').flickrAPIConfig);

describe('search', function () {

	it('should perform a search query', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.media()
			.search("elephants")
			.get()
			.then(function (response) {

				// Check that we get some results
				assert.equal(typeof response.body.photos.photo.length, "number");
				assert.equal(typeof response.body.photos.photo[0].title, "string");
				assert.equal(typeof response.body.photos.photo[0].id, "string");
				assert.equal(typeof response.body.photos.photo[0].owner, "string");
				// Check that we get the total results back
				assert.equal(typeof response.body.photos.total, "string");
				done();

			});

	});

});
