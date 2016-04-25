/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;
var groupFixture = require('./fixtures/group-2786742@N24');

describe('groups', function () {

	it('should fetch a group\'s details', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.groups('33051635@N00')
			.get()
			.then(function (response) {
				assert.deepEqual(response.body.toString(), groupFixture.toString());
				done();
			});

	});

	it('should fetch a group\'s photos', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.groups('33051635@N00')
			.media()
			.get()
			.then(function (response) {
				assert.equal(response.body.photos.photo.length, 100);
				assert.equal(response.body.photos.pages, 253);
				assert.equal(response.body.photos.page, 1);
				done();
			});

	});

	it('should fetch a group\'s discussion topics', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.groups('33051635@N00')
			.discussions()
			.get()
			.then(function (response) {
				assert.equal(response.body.topics.topic.length, 100);
				assert.equal(response.body.topics.total, '507');
				assert.equal(response.body.topics.pages, 6);
				assert.equal(response.body.topics.page, 1);
				done();
			});

	});

});
