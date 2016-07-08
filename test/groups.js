/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;

describe('groups', function () {

	it('should fetch a group\'s details', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			groupId = '33051635@N00';

		flickrSDK
			.request()
			.groups(groupId)
			.get()
			.then(function (request) {
				assert.deepEqual(request.body['group_id'], groupId);
				assert.deepEqual(request.body.method, 'flickr.groups.getInfo');
				done();
			});

	});

	it('should fetch a group\'s photos', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			groupId = '33051635@N00';

		flickrSDK
			.request()
			.groups(groupId)
			.media()
			.get()
			.then(function (request) {
				assert.deepEqual(request.body['group_id'], groupId);
				assert.deepEqual(request.body.method, 'flickr.groups.pools.getPhotos');
				done();
			});

	});

	it('should fetch a group\'s discussion topics', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig),
			groupId = '33051635@N00';

		flickrSDK
			.request()
			.groups(groupId)
			.discussions()
			.get()
			.then(function (request) {
				assert.deepEqual(request.body['group_id'], groupId);
				assert.deepEqual(request.body.method, 'flickr.groups.discuss.topics.getList');
				done();
			});

	});

});
