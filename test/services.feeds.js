var Subject = require('../services/feeds');
var Request = require('../lib/request').Request;
var assert = require('assert');
var parse = require('url').parse;

describe('services/feeds', function () {
	var subject;

	beforeEach(function () {
		subject = new Subject();
	});

	it('returns a superagent Request', function () {
		assert(subject._('photos_public') instanceof Request);
	});

	/*
		TODO user-agent
	*/

	it('adds default request headers');

	it('uses the correct path', function () {
		var req = subject._('photos_public');
		var url = parse(req.url);

		assert.equal(url.pathname, '/services/feeds/photos_public.gne');
	});

	it('uses the correct host', function () {
		var req = subject._('photos_public');
		var url = parse(req.url);

		assert.equal(url.host, 'www.flickr.com');
	});

	it('adds default query string arguments', function () {
		var req = subject._('photos_public').request();
		var url = parse(req.path, true);

		assert.equal(url.query.format, 'json');
		assert.equal(url.query.nojsoncallback, '1');
	});

	it('overrides default query string arguments', function () {
		var req, url;

		subject = new Subject({
			lang: 'fr-fr'
		});

		req = subject._('photos_public').request();
		url = parse(req.path, true);

		assert.equal(url.query.lang, 'fr-fr');
	});

	it('adds additional query string arguments', function () {
		var req = subject._('photos_public', { format: 'lol' }).request();
		var url = parse(req.path, true);

		assert.equal(url.query.format, 'lol');
	});

	describe('#publicPhotos', function () {

		it('returns a Request instance', function () {
			var req = subject.publicPhotos({ lang: 'fr-fr' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/photos_public.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
			assert.equal(req.qs.lang, 'fr-fr');
		});

	});

	describe('#friendsPhotos', function () {

		it('requires "user_id"', function () {

			assert.throws(function () {
				subject.friendsPhotos();
			}, function (err) {
				return err.message === 'Missing required argument "user_id"';
			});
		});

		it('returns a Request instance', function () {
			var req = subject.friendsPhotos({ user_id: '1234' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/photos_friends.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
			assert.equal(req.qs.user_id, '1234');
		});

	});

	describe('#favePhotos', function () {

		it('requires "id" or "nsid"', function () {
			assert.throws(function () {
				subject.favePhotos();
			}, function (err) {
				return err.message === 'Missing required argument, you must provide one of the following: "id", "nsid"';
			});
		});

		it('returns a Request instance', function () {
			var req = subject.favePhotos({ id: '1234' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/photos_faves.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
			assert.equal(req.qs.id, '1234');
		});

	});

	describe('#groupDiscussions', function () {

		it('requires "user_id"', function () {
			assert.throws(function () {
				subject.groupDiscussions();
			}, function (err) {
				return err.message === 'Missing required argument "id"';
			});
		});

		it('returns a Request instance', function () {
			var req = subject.groupDiscussions({ id: '1234' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/groups_discuss.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
			assert.equal(req.qs.id, '1234');
		});

	});

	describe('#groupPool', function () {

		it('requires "user_id"', function () {
			assert.throws(function () {
				subject.groupPool();
			}, function (err) {
				return err.message === 'Missing required argument "id"';
			});
		});

		it('returns a Request instance', function () {
			var req = subject.groupPool({ id: '1234' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/groups_pool.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
			assert.equal(req.qs.id, '1234');
		});

	});

	describe('#forum', function () {

		it('returns a Request instance', function () {
			var req = subject.forum({ id: '1234' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/forums.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
		});

	});

	describe('#recentActivity', function () {

		it('requires "user_id"', function () {
			assert.throws(function () {
				subject.recentActivity();
			}, function (err) {
				return err.message === 'Missing required argument "user_id"';
			});
		});

		it('returns a Request instance', function () {
			var req = subject.recentActivity({ user_id: '1234' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/activity.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
			assert.equal(req.qs.user_id, '1234');
		});

	});

	describe('#recentComments', function () {

		it('requires "user_id"', function () {
			assert.throws(function () {
				subject.recentComments();
			}, function (err) {
				return err.message === 'Missing required argument "user_id"';
			});
		});

		it('returns a Request instance', function () {
			var req = subject.recentComments({ user_id: '1234' });

			assert(req instanceof Request);
			assert.equal(req.method, 'GET');
			assert.equal(req.url, 'https://www.flickr.com/services/feeds/photos_comments.gne');
			assert.equal(req.qs.format, 'json');
			assert.equal(req.qs.nojsoncallback, '1');
			assert.equal(req.qs.user_id, '1234');
		});

	});

});
