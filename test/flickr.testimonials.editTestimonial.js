var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.testimonials.editTestimonial', function () {

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.testimonials.editTestimonial({ testimonial_id: '_', testimonial_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('requires "testimonial_id"', function () {

		assert.throws(function () {
			flickr.testimonials.editTestimonial({ user_id: '_', testimonial_text: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "testimonial_id"';
		});

	});

	it('requires "testimonial_text"', function () {

		assert.throws(function () {
			flickr.testimonials.editTestimonial({ user_id: '_', testimonial_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "testimonial_text"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.testimonials.editTestimonial({ user_id: '_', testimonial_id: '_', testimonial_text: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
