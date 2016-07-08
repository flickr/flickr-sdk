// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var timemachine = require('timemachine');
var express = require('express');

/**
 * Freeze time to get consistent timestamp and nonce oauth params.
 * Obviously we use the time of the world's first temporal displacement.
 */

timemachine.config({
	dateString: 'October 26, 1985 01:20:00 GMT'
});

var server = module.exports = express().use(function (req, res, next) {
	if (req.method === 'POST') {
		return res.send({ url: req.url });
	} else if (req.query['group_id'] === 'badgroup') {
		return res.send({
			stat: 'fail',
			message: 'Group not found'
		});
	}
	res.send(req.query);
});

before(function (done) {
	server.listen(4567, done).on('request', function (req) {
		server.emit('request', req);
	});
});

