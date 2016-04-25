// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

var FlickrTransport = require('./lib/flickr-transport.js');
var apiV1 = require('flickr-api-swagger');
var findDefinition = require('./lib/find-definition.js');
var nsidRegex = new RegExp("^[0-9]+@N[0-9]+$");

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
 * Group of methods for working with media
 * @function media
 * @memberof! FlickrRequest#
 * @param {string=} mediaID - ID of the media we're working with
 * @returns {object} verbs for working with a piece of media and child namespaces
 */
FlickrRequest.prototype.media = function (mediaID) {

	var request = this;

	return {

		/**
		 * Gets an individual media item
		 * @memberof! FlickrRequest#
		 * @function media.get
		 * @param {object} additionalParams - extra data to attach to the API call
		 * @returns {object} an existing media object
		 */
		get: function (additionalParams) {
			return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getPhotoByID'), { "photo_id": mediaID }, additionalParams);
		},

		/**
		 * Uploads an individual media item
		 * @memberof! FlickrRequest#
		 * @function media.post
		 * @param {object} additionalParams - extra data to attach to the API call
		 * @returns {object} a new photo object
		 */
		post: function (additionalParams) {
			return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'uploadPhoto'), {}, additionalParams);
		},

		/**
		 * Group of methods for performing searches
		 * @memberof! FlickrRequest#
		 * @function media.search
		 * @param {string} query - Search query.
		 * @returns {object} verbs for performing a search
		 */
		search: function (searchQuery) {

			return {

				/**
				 * Gets a list of media matching the search query
				 * @memberof! FlickrRequest#
				 * @function media.search.get
				 * @param {object} additionalParams - extra data to attach to the API call
				 * @param {number} additionalParams.pageNumber - Which page of results
				 * @param {number} additionalParams.pageSize - How many results to fetch per page
				 * @returns {object} a list of media objects and details about the result
				 */
				get: function (additionalParams) {
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getMediaBySearch'), { "text": searchQuery }, additionalParams);
				}

			};

		},

		/**
		 * Group of methods for fetching the context around an item of media
		 * @memberof! FlickrRequest#
		 * @function media.context
		 * @param {number} contextSize - How many photos each side of this should we fetch
		 * @returns {object} verbs for working with context and child namespaces
		 */
		context: function (contextSize) {

			return {

				/**
				 * Group of methods for getting photolist context
				 * @memberof! FlickrRequest#
				 * @function media.context.photolist
				 * @param {string} photolistID - ID for the photo list where getting context for
				 * @returns {object} verbs for performing a photolist context call
				 */
				photolist: function (photolistID) {

					return {

						/**
						 * Returns two lists of photos either side of this one
						 * @memberof! FlickrRequest#
						 * @function media.context.photolist.get
						 * @param {object} additionalParams - extra data to attach to the API call
						 * @returns {object} two arrays of photo objects
						 */
						get: function (additionalParams) {
							return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getPhotolistContextByID'), {
								"photo_id": mediaID,
								"photolist_id": photolistID,
								"num_next": contextSize,
								"num_prev": contextSize
							}, additionalParams);
						}

					};

				},

				/**
				 * Group of methods for getting an album context
				 * @memberof! FlickrRequest#
				 * @function media.context.album
				 * @param {string} albumID - ID for the album we're getting context for
				 * @returns {object} verbs for performing an album context call
				 */
				album: function (albumID) {

					return {

						/**
						 * Returns two lists of photos either side of this one in the album context
						 * @memberof! FlickrRequest#
						 * @function media.context.album.get
						 * @param {object} additionalParams - extra data to attach to the API call
						 * @returns {object} two arrays of photo objects
						 */
						get: function (additionalParams) {
							return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getAlbumContextByID'), {
								"photo_id": mediaID,
								"photoset_id": albumID,
								"num_next": contextSize,
								"num_prev": contextSize
							}, additionalParams);
						}

					};

				},

				/**
				 * Group of methods for getting a sharedEntity context
				 * @memberof! FlickrRequest#
				 * @function media.context.sharedEntity
				 * @param {string} shareID - ID of the shared entity
				 * @param {string} shareOwner - ID of the owner of this shared entity
				 * @returns {object} verbs for performing a sharedEntity context call
				 */
				sharedEntity: function (shareID, shareOwner) {

					return {

						/**
						 * Returns two lists of photos either side of this one in the sharedEntity context
						 * @memberof! FlickrRequest#
						 * @function media.context.sharedEntity.get
						 * @param {object} additionalParams - extra data to attach to the API call
						 * @returns {object} two arrays of photo objects
						 */
						get: function (additionalParams) {
							return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getAlbumContextByID'), {
								"photo_id": mediaID,
								"share_code": shareID,
								"share_owner": shareOwner,
								"gp_code": shareID,
								"gp_owner": shareOwner,
								"num_next": contextSize,
								"num_prev": contextSize
							}, additionalParams);
						}

					};

				},

				/**
				 * Group of methods for getting a photostream context
				 * @memberof! FlickrRequest#
				 * @function media.context.photostream
				 * @returns {object} verbs for performing a photostream context call
				 */
				photostream: function () {

					return {

						/**
						 * Returns two lists of photos either side of this one in the photostream context
						 * @memberof! FlickrRequest#
						 * @function media.context.photostream.get
						 * @param {object} additionalParams - extra data to attach to the API call
						 * @param {number} additionalParams.order_by - Two options: []'datetaken', 'dateposted'], defaults to 'dateposted'
						 * @param {number} additionalParams.view_as - Four options: ['public', 'friend', 'family', 'ff'], defaults to calling user's relationship
						 * @returns {object} two arrays of photo objects
						 */
						get: function (additionalParams) {
							return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getPhotostreamContextByID'), {
								"photo_id": mediaID,
								"num_next": contextSize,
								"num_prev": contextSize
							}, additionalParams);
						}

					};

				},

				/**
				 * Group of methods for getting a favorites context
				 * @memberof! FlickrRequest#
				 * @function media.context.favorites
				 * @param {string} personID - ID or path_alias for person who's favorites define this context
				 * @returns {object} verbs for performing a favorites context call
				 */
				favorites: function (personID) {

					return {

						/**
						 * Returns two lists of photos either side of this one in the favorites context
						 * @memberof! FlickrRequest#
						 * @function media.context.favorites.get
						 * @param {object} additionalParams - extra data to attach to the API call
						 * @returns {object} two arrays of photo objects
						 */
						get: function (additionalParams) {
							return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getFavoritesContextByID'), {
								"photo_id": mediaID,
								"user_id": (nsidRegex.test(personID)) ? personID : null,
								"path_alias": (nsidRegex.test(personID)) ? null : personID,
								"num_next": contextSize,
								"num_prev": contextSize
							}, additionalParams);
						}

					};

				}

			};

		}

	};

};

/**
 * Group of methods for working with groups
 * @memberof! FlickrRequest#
 * @function groups
 * @param {string=} groupID - ID of the group we're working with
 * @returns {object} verbs for working with a photo and child namespaces
 */
FlickrRequest.prototype.groups = function (groupID) {

	var request = this;

	return {

		/**
		 * Gets an individual group
		 * @memberof! FlickrRequest#
		 * @function groups.get
		 * @param {object} additionalParams - extra data to attach to the API call
		 * @returns {object} an existing group object
		 */
		get: function (additionalParams) {
			return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGroupByID'), { "group_id": groupID }, additionalParams);
		},

		/**
		 * Group of methods for working with media in groups
		 * @memberof! FlickrRequest#
		 * @function groups.media
		 * @returns {object} verbs for working with a group's media and child namespaces
		 */
		media: function () {

			return {

				/**
				 * Gets photos in a group
				 * @memberof! FlickrRequest#
				 * @function groups.media.get
				 * @param {object} additionalParams - extra data to attach to the API call
				 * @returns {object} a bunch of photos in a group
				 */
				get: function (additionalParams) {
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGroupPhotosByID'), { "group_id": groupID }, additionalParams);
				}

			};

		},

		/**
		 * Group of methods for working with group discussions
		 * @memberof! FlickrRequest#
		 * @function groups.discussions
		 * @returns {object} verbs for working with a group's discussions and child namespaces
		 */
		discussions: function () {

			return {

				/**
				 * Gets discussions in a group
				 * @memberof! FlickrRequest#
				 * @function groups.discussions.get
				 * @param {object} additionalParams - extra data to attach to the API call
				 * @returns {object} a list of discussion topics in a group
				 */
				get: function (additionalParams) {
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGroupDiscussionsByID'), { "group_id": groupID }, additionalParams);
				}

			};

		}

	};

};

/**
 * Group of methods for working with albums
 * @memberof! FlickrRequest#
 * @function albums
 * @param {string=} albumID - ID of the album we're working with
 * @returns {object} verbs for working with a album and child namespaces
 */
FlickrRequest.prototype.albums = function (albumID) {

	var request = this;

	return {

		/**
		 * Group of methods for working with media in albums
		 * @memberof! FlickrRequest#
		 * @function albums.media
		 * @returns {object} verbs for working with a album and child namespaces
		 */
		media: function () {

			return {

				/**
				 * Gets photos from an album
				 * @memberof! FlickrRequest#
				 * @function albums.media.get
				 * @param {object} additionalParams - extra data to attach to the API call
				 * @returns {object} an existing group object
				 */
				get: function (additionalParams) {
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getAlbumByID'), { "photoset_id": albumID }, additionalParams);
				}

			};

		}

	};

};

/**
 * Group of methods for working with galleries
 * @memberof! FlickrRequest#
 * @function galleries
 * @param {string=} galleryID - ID of the gallery we're working with
 * @returns {object} verbs for working with galleries and child namespaces
 */
FlickrRequest.prototype.galleries = function (galleryID) {

	var request = this;

	return {

		/**
		 * Group of methods for working with media in galleries
		 * @memberof! FlickrRequest#
		 * @function galleries.media
		 * @returns {object} verbs for working with a gallery and child namespaces
		 */
		media: function () {

			return {

				/**
				 * Gets photos from a gallery
				 * @memberof! FlickrRequest#
				 * @function galleries.media.get
				 * @param {object} additionalParams - extra data to attach to the API call
				 * @returns {object} an array of photos in a gallery
				 */
				get: function (additionalParams) {
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGalleryPhotosByID'), { "gallery_id": galleryID }, additionalParams);
				}

			};

		}

	};

};

/**
 * Group of methods for working with users
 * @memberof! FlickrRequest#
 * @function people
 * @param {string=} personID - ID of the people
 * @returns {object} verbs for working with people and child namespaces
 */
FlickrRequest.prototype.people = function (personID) {

	var request = this;

	return {

		/**
		 * Group of methods for getting at a people's media
		 * @memberof! FlickrRequest#
		 * @function people.media
		 * @returns {object} verbs for working with people and child namespaces
		 */
		media: function () {

			return {

				/**
				 * Gets this people's public photostream
				 * @memberof! FlickrRequest#
				 * @function people.media.get
				 * @param {object} additionalParams - extra data to attach to the API call
				 * @returns {object} an array of public photos belonging to this people
				 */
				get: function (additionalParams) {
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getMediaByPersonID'), { "user_id": personID }, additionalParams);
				}

			};

		},

		/**
		 * Group of methods for working with favorites
		 * @memberof! FlickrRequest#
		 * @function people.favorites
		 * @returns {object} verbs for working with favorites and child namespaces
		 */
		favorites: function () {

			return {

				/**
				 * Group of methods for working with media in favorites
				 * @memberof! FlickrRequest#
				 * @function people.favorites.media
				 * @returns {object} verbs for working with favorites and child namespaces
				 */
				media: function () {

					return {

						/**
						 * Gets this people's favorite photos
						 * @memberof! FlickrRequest#
						 * @function people.favorites.media.get
						 * @param {object} additionalParams - extra data to attach to the API call
						 * @returns {object} an array of photos in favorites
						 */
						get: function (additionalParams) {
							return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getFavoritesByPersonID'), { "user_id": personID }, additionalParams);
						}

					};

				}

			};

		},

		/**
		 * Group of methods for working with a people's albums
		 * @memberof! FlickrRequest#
		 * @function people.albums
		 * @returns {object} verbs for working with a people's albums and child namespaces
		 */
		albums: function () {

			return {

				/**
				 * Gets this people's albums
				 * @memberof! FlickrRequest#
				 * @function people.albums.media.get
				 * @param {object} additionalParams - extra data to attach to the API call
				 * @returns {object} an array of albums belonging to this people
				 */
				get: function (additionalParams) {
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getAlbumsByPersonID'), { "user_id": personID }, additionalParams);
				}

			};

		}

	};

};

/**
 * Expose it
 */
module.exports = FlickrSDK;
