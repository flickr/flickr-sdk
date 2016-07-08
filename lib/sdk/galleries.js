/**
 * Group of methods for working with galleries
 * @memberof! FlickrRequest#
 * @function galleries
 * @param {string=} galleryID - ID of the gallery we're working with
 * @returns {object} verbs for working with galleries and child namespaces
 */

var apiV1 = require('flickr-api-swagger');

module.exports = function (galleryID) {

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
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGalleryPhotosByID'), { "gallery_id": galleryID }, request.auth, additionalParams);
				}

			};

		}

	};

};