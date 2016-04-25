// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var timemachine = require('timemachine');
var express = require('express');
var yakbak = require('yakbak');

/**
 * Freeze time to get consistent timestamp and nonce oauth params.
 * Obviously we use the time of the world's first temporal displacement.
 */

timemachine.config({
	dateString: 'October 26, 1985 01:20:00 GMT'
});

/**
 * Create an http server to record and playback API responses.
 */

var upload = yakbak('https://up-pool.flickr.com', {
	dirname: __dirname + '/tapes'
});

var flickr = yakbak('https://fts.flickr.vip.bf1.yahoo.com', {
	dirname: __dirname + '/tapes'
});

var v2 = yakbak('http://api.flickr.com', {
	dirname: __dirname + '/tapes'
});

var server = module.exports = express().use(function (req, res, next) {
	if (req.path === '/platform/upload') {
		upload(req, res, next);
	} else if (/\/v2\//.test(req.path)) {
		v2(req, res, next);
	} else {
		flickr(req, res, next);
	}
});

before(function (done) {
	server.listen(4567, done).on('request', function (req) {
		server.emit('request', req);
	});
});

