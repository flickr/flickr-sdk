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
		assert.equal(req.params.format, 'json');
		assert.equal(req.params.nojsoncallback, '1');
		assert.equal(req.params.method, 'flickr.testimonials.deleteTestimonial');
		assert.equal(req.header['Content-Type'], 'text/plain');
		assert.equal(req.params.testimonial_id, '_');
	});

});
