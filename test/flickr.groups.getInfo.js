var flickr = require('..')();
var assert = require('assert');

describe('flickr.groups.getInfo', function () {

	it('requires "group_id"', function () {

		assert.throws(function () {
			flickr.groups.getInfo({});
		}, function (err) {
			return err.message === 'Missing required argument "group_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.groups.getInfo({ group_id: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
