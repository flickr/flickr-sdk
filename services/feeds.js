var request = require('superagent');
var validate = require('../validate');

/**
 * @constructor
 */

function Feeds(defaults) {

	this.defaults = defaults || {
		format: 'json'
	};
}

/**
 * Public Photos & Videos
 * @see https://www.flickr.com/services/feeds/docs/photos_public/
 */

Feeds.prototype.publicPhotos = function (args) {
	return request('GET', 'https://www.flickr.com/services/feeds/photos_public.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * Friends' Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_friends/
 */

Feeds.prototype.friendsPhotos = function (args) {
	validate(args, 'user_id');
	return request('GET', 'https://www.flickr.com/services/feeds/photos_friends.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * Favorite Photos Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_faves/
 */

Feeds.prototype.favePhotos = function (args) {
	/**
	 * This feed launched with support for id, but was
	 * later changed to support `nsid`
	 * This allows us to check both, and fail if neither is specified
	 */
	validate(args, ['id', 'nsid']);
	return request('GET', 'https://www.flickr.com/services/feeds/photos_faves.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * Group Discussion Feed
 * @see https://www.flickr.com/services/feeds/docs/groups_discuss/
 */

Feeds.prototype.groupDiscussions = function (args) {
	validate(args, 'id');
	return request('GET', 'https://www.flickr.com/services/feeds/groups_discuss.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * Group Pool Feed
 * @see https://www.flickr.com/services/feeds/docs/groups_pool/
 */

Feeds.prototype.groupPool = function (args) {
	validate(args, 'id');
	return request('GET', 'https://www.flickr.com/services/feeds/groups_pool.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * Forum Discussion Feed
 * @see https://www.flickr.com/services/feeds/docs/forums/
 */

Feeds.prototype.forum = function (args) {
	return request('GET', 'https://www.flickr.com/services/feeds/forums.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * Recent Activity on Your Photostream (erroneously named, includes sets)
 * @see https://www.flickr.com/services/feeds/docs/activity/
 */

Feeds.prototype.recentActivity = function (args) {
	validate(args, 'user_id');
	return request('GET', 'https://www.flickr.com/services/feeds/activity.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * Recent Comments Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_comments/
 */

Feeds.prototype.recentComments = function (args) {
	validate(args, 'user_id');
	return request('GET', 'https://www.flickr.com/services/feeds/photos_comments.gne')
	.query(this.defaults)
	.query(args);
};

/**
 * @module services/feeds
 */

module.exports = Feeds;
