/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;

describe('people', function () {

	it('should fetch a person\'s public photostream', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			nsid = "40575690@N00";

		flickrSDK
			.request()
			.people(nsid)
			.media()
			.get()
			.then(function (request) {
				assert.equal(request.body['user_id'], nsid);
				assert.equal(request.body.method, 'flickr.people.getPhotos');
				done();
			});

	});

	it('should fetch a person\'s favorite photos', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			nsid = "40575690@N00";

		flickrSDK
			.request()
			.people(nsid)
			.favorites()
			.media()
			.get()
			.then(function (request) {
				assert.equal(request.body['user_id'], nsid);
				assert.equal(request.body.method, 'flickr.favorites.getList');
				done();
			});

	});

	it('should fetch a person\'s list of albums', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			userId = "36521981547@N01";

		flickrSDK
			.request()
			.people(userId)
			.albums()
			.get()
			.then(function (request) {
				assert.equal(request.body['user_id'], userId);
				assert.equal(request.body.method, "flickr.photosets.getList");
				done();
			});

	});

	it('should get a person\'s information', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			nsid = "36521981547@N01";

		flickrSDK
			.request()
			.people(nsid)
			.get()
			.then(function (request) {
				assert.equal(request.body['user_id'], nsid);
				assert.equal(request.body.method, "flickr.people.getInfo");
				done();
			});

	});

});
