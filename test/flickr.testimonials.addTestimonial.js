var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.testimonials.addTestimonial', function () {

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.testimonials.addTestimonial({
				testimonial_text: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('requires "testimonial_text"', function () {

		assert.throws(function () {
			flickr.testimonials.addTestimonial({
				user_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "testimonial_text"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.testimonials.addTestimonial({
			user_id: '_',
			testimonial_text: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.testimonials.addTestimonial');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.qs.user_id, '_');
		assert.equal(req.qs.testimonial_text, '_');
	});

});
