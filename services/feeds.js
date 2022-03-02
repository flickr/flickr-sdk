/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */

var request = require('../lib/request');
var validate = require('../lib/validate');

/**
 * Creates a new Feeds service instance. You can use this instance
 * to explore and retrieve public Flickr API data.
 *
 * @constructor
 * @param {Object} [args] Arguments that will be passed along with every feed request
 * @param {String} [args.format=json] The feed response format
 * @param {String} [args.lang=en-us] The language to request for the feed
 * @memberof Flickr
 *
 * @example
 *
 * var feeds = new Flickr.Feeds();
 */

function Feeds(args) {

	// allow creating a client without `new`
	if (!(this instanceof Feeds)) {
		return new Feeds(args);
	}

	// default arguments
	this._args = Object.assign({ format: 'json', nojsoncallback: 1 }, args);
}

/**
 * Factory method to create a new request for a feed.
 * @param {String} feed
 * @param {Object} [args]
 * @returns {Request}
 * @private
 */

Feeds.prototype._ = function (feed, args) {
	return request('GET', 'https://www.flickr.com/services/feeds/' + feed + '.gne')
		.query(this._args)
		.query(args);
};

/**
 * Returns a list of public content matching some criteria.
 *
 * @param {Object} [args]
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_public/
 */

Feeds.prototype.publicPhotos = function (args) {
	return this._('photos_public', args);
};

/**
 * Returns a list of public content from the contacts, friends & family of a given person.
 *
 * @param {Object} args
 * @param {Number|String} args.user_id The user ID of the user to fetch friends' photos and videos for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_friends/
 */

Feeds.prototype.friendsPhotos = function (args) {
	validate(args, 'user_id');

	return this._('photos_friends', args);
};

/**
 * Returns a list of public favorites for a given user.
 *
 * @param {Object} args
 * @param {Number|String} args.id A single user ID. This specifies a user to fetch for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_faves/
 */

Feeds.prototype.favePhotos = function (args) {
	// This feed launched with support for id, but was
	// later changed to support `nsid`. This allows us to
	// check both, and fail if neither is specified
	validate(args, ['id', 'nsid']);

	return this._('photos_faves', args);
};

/**
 * Returns a list of recent discussions in a given group.
 *
 * @param {Object} args
 * @param {Number} args.id The ID of the group to fetch discussions for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/groups_discuss/
 */

Feeds.prototype.groupDiscussions = function (args) {
	validate(args, 'id');

	return this._('groups_discuss', args);
};

/**
 * Returns a list of things recently added to the pool of a given group.
 *
 * @param {Object} args
 * @param {Number} args.id The ID of the group to fetch for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/groups_pool/
 */

Feeds.prototype.groupPool = function (args) {
	validate(args, 'id');

	return this._('groups_pool', args);
};

/**
 * Returns a list of recent topics from the forum.
 *
 * @param {Object} [args]
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/forums/
 */

Feeds.prototype.forum = function (args) {
	return this._('forums', args);
};

/**
 * Returns a list of recent comments that have been commented on by a given person.
 *
 * @param {Object} args
 * @param {Number|String} args.user_id The user ID to fetch recent comments for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_comments/
 */

Feeds.prototype.recentComments = function (args) {
	validate(args, 'user_id');

	return this._('photos_comments', args);
};

module.exports = Feeds;
