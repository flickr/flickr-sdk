/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;

describe('people', function () {

	it('should fetch a person\'s public photostream', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.people("40575690@N00")
			.media()
			.get()
			.then(function (response) {
				assert.equal(response.body.photos.photo.length, 100);
				assert.equal(response.body.photos.pages, 29);
				assert.equal(response.body.photos.page, 1);
				assert.equal(response.body.photos.perpage, 100);
				done();
			});

	});

	it('should fetch a person\'s favorite photos', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.people("40575690@N00")
			.favorites()
			.media()
			.get()
			.then(function (response) {
				assert.equal(response.body.photos.photo.length, 100);
				assert.equal(response.body.photos.pages, 7);
				assert.equal(response.body.photos.page, 1);
				done();
			});

	});

	it('should fetch a person\'s list of albums', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.people("36521981547@N01")
			.albums()
			.get()
			.then(function (response) {
				assert.equal(response.body.photosets.photoset.length, 92);
				assert.equal(response.body.photosets.perpage, 92);
				assert.equal(response.body.photosets.page, 1);
				done();
			});

	});

});
