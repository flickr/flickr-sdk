var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.testimonials.getAllTestimonialsAbout', function () {

	it('returns a Request instance', function () {
		var req = flickr.testimonials.getAllTestimonialsAbout({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
