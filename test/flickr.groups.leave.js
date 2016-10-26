var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.leave', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.leave({});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.leave({ group_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
