// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/**
 * Group of methods for working with media
 * @function media
 * @memberof! FlickrRequest#
 * @param {string=} mediaID - ID of the media we're working with
 * @returns {object} verbs for working with a piece of media and child namespaces
 */

var apiV1 = require('flickr-api-swagger');
var nsidRegex = new RegExp("^[0-9]+@N[0-9]+$");

module.exports = function (mediaID) {

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