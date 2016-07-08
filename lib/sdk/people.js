/**
 * Group of methods for working with users
 * @memberof! FlickrRequest#
 * @function people
 * @param {string=} personID - ID of the people
 * @returns {object} verbs for working with people and child namespaces
 */

var apiV1 = require('flickr-api-swagger');

module.exports = function (personID) {

	var request = this;

	return {

		/**
		 * Gets this person's information
		 * @memberof! FlickrRequest#
		 * @function people.people.get
		 * @param {object} additionalParams - extra data to attach to the API call
		 * @returns {object} information about the person
		 */
		get: function (additionalParams) {
			return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getPersonByID'), { "user_id": personID }, additionalParams);
		},

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