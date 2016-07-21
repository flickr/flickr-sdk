// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;

describe('validate namespace', function () {

	this.timeout(10000);

	/**
	 * Test echo
	 */
	it('should echo back parameters', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.validate()
			.echo()
			.then(function (request) {
				assert.equal(request.body.echo, "hello world");
				assert.equal(request.body.method, "flickr.test.echo");
				done();
			});

	});

});
