// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var FlickrSDK = require('../flickr-sdk.js');
var findDefinition = require('../lib/find-definition.js');
var brokenSchema = require('./fixtures/broken-schema');
var proxySchema = require('./fixtures/proxy-schema');
var flickrAPIConfig = require('./config.js').flickrAPIConfig;
var clone = require('clone');
var async = require('async');

describe('Flickr SDK', function () {

	/**
	 * Test the logging handler
	 */
	it('should allow the use of a custom log handler', function (done) {

		var logs = [];

		var flickrSDK = new FlickrSDK(flickrAPIConfig, {
			logger: {
				log: function (message) {
					logs.push(message);
				}
			}
		});

		flickrSDK
			.request()
			.groups('2377207@N24')
			.get()
			.then(function (group) {
				assert.equal(logs[0].match(/Starting get API call/).length, 1);
				assert.equal(logs[1].match(/Finished get API call/).length, 1);
				done();
			});

	});

	/**
	 * Allow the passing in of a superagent plugin
	 */
	it('should allow the use of a superagent plugin', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);
		var logs = [];

		flickrSDK
			.request()
			.plugin(function (req) {
				req.on('request', function () {
					logs.push("request");
				});
				req.on('response', function () {
					logs.push("response");
				});
			})
			.groups('2377207@N24')
			.get()
			.then(function (res) {
				assert.equal(logs[0], "request");
				assert.equal(logs[1], "response");
				done();
			});

	});

	/**
	 * Handle multiple plugins
	 */
	it('should handle multiple superagent plugins', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);
		var logs = [];

		flickrSDK
			.request()
			.plugin(function (req) {
				logs.push("first plugin");
			})
			.plugin(function (req) {
				logs.push("second plugin");
			})
			.groups('2377207@N24')
			.get()
			.then(function (res) {
				assert.equal(logs[0], "first plugin");
				assert.equal(logs[1], "second plugin");
				done();
			});

	});

	/**
	 * Plugins per request
	 */
	it('shouldn\'t conflict across requests', function (actuallyDone) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);
		var apiCalls = [];
		var firstLogs = [];
		var secondLogs = [];

		apiCalls.push(function (done) {
			flickrSDK
			.request()
				.plugin(function (req) {
					firstLogs.push("first request");
				})
				.media('21132240942')
				.get()
				.then(function (res) {
					assert.equal(firstLogs.length, 1);
					assert.equal(firstLogs[0], "first request");
					done(null, {});
				});
		});

		apiCalls.push(function (done) {
			flickrSDK
			.request()
				.plugin(function (req) {
					secondLogs.push("second request");
				})
				.groups('2377207@N24')
				.get()
				.then(function (res) {
					assert.equal(secondLogs.length, 1);
					assert.equal(secondLogs[0], "second request");
					done(null, {});
				});
		});

		async.parallel(apiCalls, function (err, results) {
			actuallyDone();
		});

	});

	/**
	 * Additional params can be passed in on top of the
	 * id that's defined in the schema
	 */
	it('should accept additional per request params', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.media('21132240942')
			.get({
				"extras": "sizes",
				"hermes": 1
			})
			.then(function (response) {
				assert.equal(typeof response.body.photo.sizes.size, "object");
				done();
			});

	});

	/**
	 * Test echo
	 */
	it('should echo back parameters', function (done) {

		var flickrSDK = new FlickrSDK(flickrAPIConfig);

		flickrSDK
			.request()
			.validate()
			.echo()
			.then(function (response) {
				assert.equal(response.body.echo._content, "hello world");
				done();
			});

	});

	/**
	 * Param validation
	 */
	describe('param validation', function () {

		/**
		 * Non-matching param
		 */
		it('should reject if a param is in the wrong format', function (done) {

			var flickrSDK = new FlickrSDK(flickrAPIConfig);

			flickrSDK
				.request()
				.groups("!@#$%")
				.get()
				.then(null, function (errors) {
					assert.equal(errors[0], "Param group_id with value !@#$% doesn\'t match pattern ^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$");
					done();
				});

		});

		/**
		 * Required param not passed in
		 */
		it('should reject if a required param is not passed in', function (done) {

			var flickrSDK = new FlickrSDK(flickrAPIConfig);

			flickrSDK
				.request()
				.people() // Supposed to put a person's ID here
				.favorites()
				.media()
				.get()
				.then(null, function (errors) {
					assert.equal(errors[0], "Required param - user_id - not specified");
					done();
				});

		});

		/**
		 * Param value isn't the correct type
		 */
		it('should reject if a param value isn\'t the right type', function (done) {

			var flickrSDK = new FlickrSDK(flickrAPIConfig);

			flickrSDK
				.request()
				.media(22905866885) // Integer and should be string
				.get()
				.then(null, function (err) {
					assert.equal(err[0], "Param photo_id with type integer not of the expected type: string");
					done();
				});

		});

	});

	/**
	 * Error handling
	 */
	describe('error handling', function () {

		it('should handle a Flickr API response error', function (done) {

			var flickrSDK = new FlickrSDK(flickrAPIConfig);

			flickrSDK
				.request()
				.groups('1234') // Fake group ID
				.get()
				.then(null, function (err) {
					assert.equal(err.message, "Group not found");
					assert.equal(err.stat, "fail");
					done();
				});

		});

		it('should handle a broken schema Flickr API response error', function (done) {

			// Remove the host override so we can hit the broken schema
			var regularSchema = clone(flickrAPIConfig);
			delete regularSchema.host;
			delete regularSchema.scheme;
			var flickrSDK = new FlickrSDK(regularSchema);

			flickrSDK.request().sdk.transport.call({
				schema: brokenSchema,
				path: '/rest?method=flickr.photos.getInfo',
				verb: 'get'
			}).then(null, function (err) {
				assert.equal(err.code, "ENOTFOUND");
				done();
			});

		});

		it('should fail if you look for an operation ID not in the schema', function (done) {

			try {
				findDefinition(brokenSchema, 'getMadeUpThingByWombat');
			} catch (err) {
				assert.equal(err, "Error: Unsupported operation: getMadeUpThingByWombat (1.0.0)");
				done();
			}

		});

		it('should fail if a parameter value isn\'t present in the enum definiton', function (done) {

			var flickrSDK = new FlickrSDK(flickrAPIConfig);

			flickrSDK
				.request()
				.media()
				.post({
					'photo': './test/fixtures/test.png',
					'is_public': 'unicorn' // Not one of the allowed values
				})
				.then(null, function (err) {
					assert.equal(err[0], "Param is_public with value unicorn not one of possible options: [0, 1]");
					done();
				});

		});

		it('should retry on certain kinds of error', function (done) {

			// Remove the host override so we can hit the proxy schema
			var regularSchema = clone(flickrAPIConfig);
			delete regularSchema.host;
			delete regularSchema.scheme;
			var flickrSDK = new FlickrSDK(regularSchema);

			flickrSDK.request().sdk.transport.call({
				schema: proxySchema,
				path: '/rest?method=flickr.photos.getInfo',
				verb: 'get'
			}).then(null, function (err) {
				assert.equal(err.code, "ECONNRESET");
				done();
			});

		});

	});

});
