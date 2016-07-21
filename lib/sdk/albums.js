/**
 * Group of methods for working with albums
 * @memberof! FlickrRequest#
 * @function albums
 * @param {string=} albumID - ID of the album we're working with
 * @returns {object} verbs for working with a album and child namespaces
 */

var apiV1 = require('flickr-api-swagger');

module.exports = function (albumID) {

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
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getAlbumByID'), { "photoset_id": albumID }, request.auth, additionalParams);
				}

			};

		}

	};

};