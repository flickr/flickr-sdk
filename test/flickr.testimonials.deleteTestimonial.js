var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.testimonials.deleteTestimonial', function () {

	it('requires "testimonial_id"', function () {

		assert.throws(function () {
			flickr.testimonials.deleteTestimonial({});
		}, function (err) {
			return err.message === 'Missing required argument "testimonial_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.testimonials.deleteTestimonial({
			testimonial_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
