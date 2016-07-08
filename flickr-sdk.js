// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var FlickrTransport = require('./lib/flickr-transport.js');
var findDefinition = require('./lib/find-definition.js');

/**
 * An instance of this object is returned when calling request() on an instance
 * of the FlcikrSDK. On its prototype are all the data types and their children
 * namespaces for making API calls on Flickr Data.
 * @constructor
 * @name FlickrRequest
 * @param {object} sdk - This is the instance of the {@link FlickrSDK} holding config and transport
 */
var FlickrRequest = function (sdk) {
	this.sdk = sdk;
};

/**
 * Accepts API config and returns an instance of {@link FlickrRequest}
 * @constructor
 * @name FlickrSDK
 * @param {object} config - API authentication details
 * @param {string} config.apiKey - Unique API key for your app
 * @param {string} config.apiSecret - Your API secret for signing calls
 * @param {string=} config.accessToken - A user's access token for use with your app
 * @param {string=} config.accessTokenSecret - A user's secret for signing calls
 * @param {string=} config.host - Optional host override useful for testing dev hosts
 * @param {string=} config.basePath - Optional basePath override useful for testing dev hosts
 * @param {string=} config.scheme - Optional scheme override useful for testing dev hosts or proxies
 * @param {object} options - Additional initialization params
 * @param {object} options.logger - Object with a log method for handling messages
 * @returns {object} FlickrRequest - Object with a bunch of things to call methods on
 */
var FlickrSDK = function (config, options) {

	// Store config on the SDK
	this.config = config;
	this.transport = new FlickrTransport(config, options);
	this.findDefinition = findDefinition;

	// Each time it's called return a new instance
	return {
		request: (function () {
			return new FlickrRequest(this);
		}).bind(this)
	};

};

/**
 * Allow the passing in of a superagent request plugin, many can be
 * added in a chain.
 * @function plugin
 * @memberof! FlickrRequest#
 * @param {function} plugin - Superagent request plugin (https://github.com/visionmedia/superagent#plugins)
 * @returns {object} the FlickrRequest instance to make calls against
 */
FlickrRequest.prototype.plugin = function (plugin) {
	this.sdk.transport.plugins.push(plugin);
	return this;
};

/**
 * Namespaces
 */
FlickrRequest.prototype.validate = require('./lib/sdk/validate');
FlickrRequest.prototype.media = require('./lib/sdk/media');
FlickrRequest.prototype.groups = require('./lib/sdk/groups');
FlickrRequest.prototype.albums = require('./lib/sdk/albums');
FlickrRequest.prototype.galleries = require('./lib/sdk/galleries');
FlickrRequest.prototype.people = require('./lib/sdk/people');
FlickrRequest.prototype.auth = require('./lib/sdk/auth');

/**
 * Expose it
 */
module.exports = FlickrSDK;
