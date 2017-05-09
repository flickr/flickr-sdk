var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.testimonials.approveTestimonial', function () {

	it('requires "testimonial_id"', function () {

		assert.throws(function () {
			flickr.testimonials.approveTestimonial({});
		}, function (err) {
			return err.message === 'Missing required argument "testimonial_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.testimonials.approveTestimonial({ testimonial_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
