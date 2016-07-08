// Copyright 2016 Yahoo Inc.
// Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.

/**
 * Group of methods for working with the validation (`test`) endpoints of the Flickr API
 * @function validate
 * @memberof! FlickrRequest#
 * @returns {object} verbs for working with validation
 */

var apiV1 = require('flickr-api-swagger');

module.exports = function () {
	var request = this;

	return {

		/**
		 * Echo a parameter back from the API
		 * @memberof! FlickrRequest#
		 * @function validate.echo
		 * @returns {object} an echo'd response of the input
		 */
		echo: function () {
			return request.sdk.transport.call(request.sdk.findDefinition(apiV1, 'echo'), { 'echo': 'hello world' }, {});
		}
	};
};
