var flickr = require('..')();
var assert = require('assert');

describe('flickr.people.getLimits', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.people.getLimits({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.people.getLimits({ api_key: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
