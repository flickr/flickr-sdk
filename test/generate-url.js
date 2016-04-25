// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/* jshint mocha:true */

var assert = require('assert');
var generateURL = require('../lib/generate-url.js');

describe('Generate URL', function () {

	it('should replace path params with values', function (done) {

		var url = generateURL({
			"schema": {
				"host": "horsebeach.net",
				"basePath": "/horse",
				"paths": {
					"/beach/{beachID}": {
						"get": {
							"parameters": [
								{
									"name": "beachID",
									"in": "path"
								}
							]
						}
					}
				}
			},
			"path": "/beach/{beachID}",
			"verb": "get"
		}, { "beachID": "999" });

		assert.equal(url, "https://horsebeach.net/horse/beach/999");

		done();

	});

	it('should do nothing to URLs without path params', function (done) {

		var url = generateURL({
			"schema": {
				"host": "horsebeach.net",
				"basePath": "/horse",
				"paths": {
					"/beach": {
						"get": {}
					}
				}
			},
			"path": "/beach",
			"verb": "get"
		});

		assert.equal(url, "https://horsebeach.net/horse/beach");

		done();

	});

	it('should allow the passing of an override host and basePath', function (done) {

		var url = generateURL({
			"schema": {
				"host": "horsebeach.net",
				"basePath": "/horse",
				"paths": {
					"/beach": {
						"get": {}
					}
				}
			},
			"path": "/beach",
			"verb": "get"
		}, {}, {
			"host": "jimwhimpey.com",
			"basePath": "/foobar"
		});

		assert.equal(url, "https://jimwhimpey.com/foobar/beach");

		done();

	});

	it('should allow the passing of an override scheme', function (done) {

		var url = generateURL({
			"schema": {
				"host": "horsebeach.net",
				"basePath": "/horse",
				"schemes": ["http"],
				"paths": {
					"/beach": {
						"get": {}
					}
				}
			},
			"path": "/beach",
			"verb": "get"
		}, {}, {
			"host": "jimwhimpey.com",
			"basePath": "/foobar",
			"scheme": "testscheme"
		});

		assert.equal(url, "testscheme://jimwhimpey.com/foobar/beach");

		done();

	});

	it('should handle a lack of basePath in the schema', function (done) {

		var url = generateURL({
			"schema": {
				"host": "horsebeach.net",
				"basePath": "",
				"paths": {
					"/beach": {
						"get": {}
					}
				}
			},
			"path": "/beach",
			"verb": "get"
		});

		assert.equal(url, "https://horsebeach.net/beach");

		done();

	});

});
