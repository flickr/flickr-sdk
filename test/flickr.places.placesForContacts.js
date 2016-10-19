var flickr = require('..')();
var assert = require('assert');

describe('flickr.places.placesForContacts', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.places.placesForContacts({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.places.placesForContacts({ api_key: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
