// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;
var flickrSDK = new FlickrSDK(flickrAPIConfig);

// Assertions shared across all contexts
function contextAssertions(body, photoId, num) {

	assert.equal(body['photo_id'], photoId);
	assert.equal(body['num_next'], num);
	assert.equal(body['num_prev'], num);

}

var flickrSDK = new FlickrSDK(flickrAPIConfig);

describe('photo context', function () {

	this.timeout(10000);

	it('should get context for a photo in a photolist', function (done) {
		var photoId = "16622505203",
			photoListId = "photolist-rjSFFi-6Ffos2-7PHwFc-zqnY97-bep7yR-ehJUZ8-qqwyJY-2zHJNP-zsfGhh-6dskSp-fcABA7-634vpw-5Fqgu3-pWvKUr-5GC56p-8GQpx6-cZdRQo-bhh6hg-6aDzhv-83s8jw-fqEXX4-6R3wrU-dVB9wb-6KiauE-5Czbxp-7Cheuv-5TtqJa-atNyC1-ogrenu-d3kQkJ-e9w6df-9KUKXC-93BVe5-6aDzir-pVfxhd-49W13o-aYvtqa-63drGu-jtvF2D-nUw6rx-8yy6LY-5qWAQW-QYUbJ-zqnY8A-oGzt1i-dcVVw6-53DpxC-6gYzZo-2zN7t7-49EkVr",
			num = 5;

		flickrSDK
			.request()
			.media(photoId)
			.context(num)
			.photolist(photoListId)
			.get()
			.then(function (request) {
				assert.equal(request.body['photo_id'], photoId);
				assert.equal(request.body['photolist_id'], photoListId);
				assert.equal(request.body['num_next'], num);
				assert.equal(request.body['num_prev'], num);

				// There's currently a bug where previous photos aren't returned
				// https://jira.corp.yahoo.com/browse/FLICKR-10005

				done();

			});

	});

	it('should get context for a photo in an album', function (done) {

		var photoId = "20310059113",
			num = 3;

		flickrSDK
			.request()
			.media(photoId)
			.context(num)
			.album("72157657634723246")
			.get()
			.then(function (request) {
				contextAssertions(request.body, photoId, num);
				done();
			});
	});

	it('should get context for a photo in an shared entity', function (done) {

		var photoId = "23427196175",
			num = 3;

		flickrSDK
			.request()
			.media(photoId)
			.context(num)
			.sharedEntity("J64o56", "40575690@N00")
			.get()
			.then(function (request) {
				contextAssertions(request.body, photoId, num);
				done();
			});
	});

	it('should get context for a photo in a photostream', function (done) {

		var photoId = "22905866885",
			num = 3;

		flickrSDK
			.request()
			.media(photoId)
			.context(num)
			.photostream()
			.get()
			.then(function (request) {
				contextAssertions(request.body, photoId, num);
				done();
			});
	});

	it('should get context for a photo in favorites', function (done) {

		var photoId = "19963559813",
			num = 3;

		flickrSDK
			.request()
			.media(photoId)
			.context(num)
			.favorites("12289718@N00")
			.get()
			.then(function (request) {
				contextAssertions(request.body, photoId, num);
				done();
			});
	});

	it('should get context for a photo in favorites passing in a path alias instead of ID', function (done) {

		var photoId = "19963559813",
			num = 3;

		flickrSDK
			.request()
			.media(photoId)
			.context(num)
			.favorites("schill")
			.get()
			.then(function (request) {
				contextAssertions(request.body, photoId, num);
				done();
			});
	});

});
