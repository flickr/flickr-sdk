// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrTransport = require('../lib/flickr-transport.js');

describe('transport', function () {

	it('should retry on a 500 error', function (done) {
		var flickrTransport = new FlickrTransport({});
		assert.equal(flickrTransport.shouldRetry(null, { status: 504 }), true);
		done();
	});

});
