var request = require('superagent');
var validate = require('../validate');
var json = require('../plugins/json');

/**
 * @constructor
 */

function Feeds(defaults) {

	this.defaults = defaults || {
		format: 'json'
	};
}

/**
 * Wrapper function to be more DRY and to add plugins
 */
function feedRequest(verb, path, args) {
	var req = request(verb, path)
	.query(this.defaults)
	.query(args);

	// if we're sending json, use the json plugin for Flickr
	if (req.qs.format === 'json') {
		// superagent will add the format twice if we don't explicitly remove it
		delete req.qs.format;

		req.use(json({ raw: true }))
		// feeds use a non-standard json return type
		.parse['application/json; charset=utf-8'] = JSON.parse;
	}

	return req;
}

/**
 * Public Photos & Videos
 * @see https://www.flickr.com/services/feeds/docs/photos_public/
 */

Feeds.prototype.publicPhotos = function (args) {
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/photos_public.gne', args);
};

/**
 * Friends' Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_friends/
 */

Feeds.prototype.friendsPhotos = function (args) {
	validate(args, 'user_id');
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/photos_friends.gne', args);
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
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/photos_faves.gne', args);
};

/**
 * Group Discussion Feed
 * @see https://www.flickr.com/services/feeds/docs/groups_discuss/
 */

Feeds.prototype.groupDiscussions = function (args) {
	validate(args, 'id');
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/groups_discuss.gne', args);
};

/**
 * Group Pool Feed
 * @see https://www.flickr.com/services/feeds/docs/groups_pool/
 */

Feeds.prototype.groupPool = function (args) {
	validate(args, 'id');
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/groups_pool.gne', args);
};

/**
 * Forum Discussion Feed
 * @see https://www.flickr.com/services/feeds/docs/forums/
 */

Feeds.prototype.forum = function (args) {
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/forums.gne', args);
};

/**
 * Recent Activity on Your Photostream (erroneously named, includes sets)
 * @see https://www.flickr.com/services/feeds/docs/activity/
 */

Feeds.prototype.recentActivity = function (args) {
	validate(args, 'user_id');
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/activity.gne', args);
};

/**
 * Recent Comments Feed
 * @see https://www.flickr.com/services/feeds/docs/photos_comments/
 */

Feeds.prototype.recentComments = function (args) {
	validate(args, 'user_id');
	return feedRequest.call(this, 'GET', 'https://www.flickr.com/services/feeds/photos_comments.gne', args);
};

/**
 * @module services/feeds
 */

module.exports = Feeds;
