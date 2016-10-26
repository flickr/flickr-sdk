var request = require('superagent');

/**
 * @constructor
 */

function Feeds(defaults) {

	defaults = defaults || {};

	/* set default format or lang for all requests */

	/* we default to json since it's a js-sdk */
	this.format = defaults.format || 'json';
	this.lang = defaults.lang;
}

/**
 * Creates an object with the option feed params
 * for this request.
 * @returns {Object}
 */

Feeds.prototype.params = function (args) {
	var params;

	args = args || {};

	params = {
		format: args.format || this.format
	};

	/* don't include unless explicitly set */
	if (args.lang || this.lang) {
		params.lang = args.lang || this.lang;
	}
	return params;
};

/**
 * Asserts that `key` is present in `args`.
 * @param {Object} args
 * @param {String} key
 * @throws {Error}
 */

function assert(args, key) {
	if (!args || !args.hasOwnProperty(key)) {
		throw new Error('Missing required argument "' + key + '"');
	}
}

/**
 * Public Photos & Videos
 * @see https://www.flickr.com/services/feeds/docs/photos_public/
 */

Feeds.prototype.publicPhotos = function (args) {
	return request('GET', 'https://www.flickr.com/services/feeds/photos_public.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * Friends' Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_friends/
 */

Feeds.prototype.friendsPhotos = function (args) {
	assert(args, 'user_id');
	return request('GET', 'https://www.flickr.com/services/feeds/photos_friends.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * Favorite Photos Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_faves/
 */

Feeds.prototype.faves = function (args) {
	/**
	 * This feed launched with support for id, but was
	 * later changed to support `nsid`
	 * This allows us to check both, and fail if neither is specified
	 */
	try {
		assert(args, 'id');
	} catch (e) {
		assert(args, 'nsid');
	}
	return request('GET', 'https://www.flickr.com/services/feeds/photos_faves.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * Group Discussion Feed
 * @see https://www.flickr.com/services/feeds/docs/groups_discuss/
 */

Feeds.prototype.groupDiscussions = function (args) {
	assert(args, 'id');
	return request('GET', 'https://www.flickr.com/services/feeds/groups_discuss.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * Group Pool Feed
 * @see https://www.flickr.com/services/feeds/docs/groups_pool/
 */

Feeds.prototype.groupPool = function (args) {
	assert(args, 'id');
	return request('GET', 'https://www.flickr.com/services/feeds/groups_pool.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * Forum Discussion Feed
 * @see https://www.flickr.com/services/feeds/docs/forums/
 */

Feeds.prototype.forum = function (args) {
	return request('GET', 'https://www.flickr.com/services/feeds/forums.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * Recent Activity on Your Photostream (erroneously named, includes sets)
 * @see https://www.flickr.com/services/feeds/docs/activity/
 */

Feeds.prototype.recentActivity = function (args) {
	assert(args, 'user_id');
	return request('GET', 'https://www.flickr.com/services/feeds/activity.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * Recent Comments Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_comments/
 */

Feeds.prototype.recentComments = function (args) {
	assert(args, 'user_id');
	return request('GET', 'https://www.flickr.com/services/feeds/photos_comments.gne')
	.query(this.params(args))
	.query(args);
};

/**
 * @module services/feeds
 */

module.exports = Feeds;
