/**
 * Group of methods for working with groups
 * @memberof! FlickrRequest#
 * @function groups
 * @param {string=} groupID - ID of the group we're working with
 * @returns {object} verbs for working with a photo and child namespaces
 */

var apiV1 = require('flickr-api-swagger');

module.exports = function (groupID) {

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
			return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGroupByID'), { "group_id": groupID }, request.auth, additionalParams);
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
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGroupPhotosByID'), { "group_id": groupID }, request.auth, additionalParams);
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
					return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'getGroupDiscussionsByID'), { "group_id": groupID }, request.auth, additionalParams);
				}

			};

		}

	};

};