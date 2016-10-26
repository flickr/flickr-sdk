var Feeds = require('../services/feeds');
var assert = require('assert');
var nock = require('nock');

describe('services/feeds', function () {
	var subject;

	beforeEach(function () {
		subject = new Feeds();
	});

	describe('constructor', function () {
		it('should set global format and lang', function () {

			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_public.gne')
			.query({
				format: 'lol',
				lang: 'fr-fr'
			})
			.reply(200);

			subject = new Feeds({
				lang: 'fr-fr',
				format: 'lol'
			});

			return subject.publicPhotos().then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
			});
		});

		it('should set global format and lang but override with request', function () {

			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_public.gne')
			.query({
				format: 'atom',
				lang: 'fr-ca'
			})
			.reply(200);

			subject = new Feeds({
				lang: 'fr-fr',
				format: 'lol'
			});

			return subject.publicPhotos({
				format: 'atom',
				lang: 'fr-ca'
			}).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
			});
		});
	});

	describe('publicPhotos', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_public.gne')
			.query({
				format: 'json'
			})
			.reply(200, 'public-photos');

			return subject.publicPhotos().then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'public-photos');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_public.gne')
			.query({
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'public-photos');

			return subject.publicPhotos({
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'public-photos');
			});
		});
	});

	describe('friendsPhotos', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_friends.gne')
			.query({
				user_id: '1234',
				format: 'json'
			})
			.reply(200, 'friends-photos');

			return subject.friendsPhotos({ user_id: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'friends-photos');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_friends.gne')
			.query({
				user_id: '1234',
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'friends-photos');

			return subject.friendsPhotos({
				user_id: '1234',
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'friends-photos');
			});
		});

		it('requires a user_id', function () {

			assert.throws(function () {
				subject.friendsPhotos();
			}, function (err) {
				return err.message === 'Missing required argument "user_id"';
			});
		});
	});

	describe('faves', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_faves.gne')
			.query({
				id: '1234',
				format: 'json'
			})
			.reply(200, 'fave-photos');

			return subject.faves({ id: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'fave-photos');
			});
		});

		it('makes the correct call with nsid', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_faves.gne')
			.query({
				nsid: '1234',
				format: 'json'
			})
			.reply(200, 'fave-photos');

			return subject.faves({ nsid: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'fave-photos');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_faves.gne')
			.query({
				id: '1234',
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'fave-photos');

			return subject.faves({
				id: '1234',
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'fave-photos');
			});
		});

		it('requires an id or nsid', function () {

			assert.throws(function () {
				subject.faves();
			}, function (err) {
				return err.message === 'Missing required argument "nsid"';
			});
		});
	});

	describe('groupDiscussions', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/groups_discuss.gne')
			.query({
				id: '1234',
				format: 'json'
			})
			.reply(200, 'groups-discuss');

			return subject.groupDiscussions({ id: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'groups-discuss');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/groups_discuss.gne')
			.query({
				id: '1234',
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'groups-discuss');

			return subject.groupDiscussions({
				id: '1234',
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'groups-discuss');
			});
		});

		it('requires a user_id', function () {

			assert.throws(function () {
				subject.groupDiscussions();
			}, function (err) {
				return err.message === 'Missing required argument "id"';
			});
		});
	});

	describe('groupPool', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/groups_pool.gne')
			.query({
				id: '1234',
				format: 'json'
			})
			.reply(200, 'groups-pool');

			return subject.groupPool({ id: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'groups-pool');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/groups_pool.gne')
			.query({
				id: '1234',
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'groups-pool');

			return subject.groupPool({
				id: '1234',
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'groups-pool');
			});
		});

		it('requires a user_id', function () {

			assert.throws(function () {
				subject.groupPool();
			}, function (err) {
				return err.message === 'Missing required argument "id"';
			});
		});
	});

	describe('forum', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/forums.gne')
			.query({
				format: 'json'
			})
			.reply(200, 'forum');

			return subject.forum().then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'forum');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/forums.gne')
			.query({
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'forum');

			return subject.forum({
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'forum');
			});
		});
	});

	describe('recentActivity', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/activity.gne')
			.query({
				user_id: '1234',
				format: 'json'
			})
			.reply(200, 'recent-activity');

			return subject.recentActivity({ user_id: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'recent-activity');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/activity.gne')
			.query({
				user_id: '1234',
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'recent-activity');

			return subject.recentActivity({
				user_id: '1234',
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'recent-activity');
			});
		});

		it('requires a user_id', function () {

			assert.throws(function () {
				subject.recentActivity();
			}, function (err) {
				return err.message === 'Missing required argument "user_id"';
			});
		});
	});

	describe('recentComments', function () {

		it('makes the correct call', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_comments.gne')
			.query({
				user_id: '1234',
				format: 'json'
			})
			.reply(200, 'recent-comments');

			return subject.recentComments({ user_id: '1234' }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'recent-comments');
			});
		});

		it('can specify custom lang and format', function () {
			var api = nock('https://www.flickr.com')
			.get('/services/feeds/photos_comments.gne')
			.query({
				user_id: '1234',
				format: 'atom',
				lang: 'fr-fr'
			})
			.reply(200, 'recent-comments');

			return subject.recentComments({
				user_id: '1234',
				lang: 'fr-fr',
				format: 'atom'
			 }).then(function (res) {
				assert(api.isDone());
				assert.equal(res.statusCode, 200);
				assert.equal(res.text, 'recent-comments');
			});
		});

		it('requires a user_id', function () {

			assert.throws(function () {
				subject.recentComments();
			}, function (err) {
				return err.message === 'Missing required argument "user_id"';
			});
		});
	});

});
