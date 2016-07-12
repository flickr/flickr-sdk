// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var clone = require('clone');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = clone(require('./config.js').flickrAPIConfig);

describe('search', function () {

	it('should perform a search query', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			searchQuery = "elephants";

		flickrSDK
			.request()
			.media()
			.search(searchQuery)
			.get()
			.then(function (request) {
				// Check that we get some results
				assert.equal(request.body.text, searchQuery);
				assert.equal(request.body.method, "flickr.photos.search");
				done();

			});

	});

});
