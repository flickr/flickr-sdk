var Flickr = require('..');

/**
 * This example demonstrates how to use public REST API methods:
 * https://www.flickr.com/services/api/
 * https://www.flickr.com/services/api/flickr.photos.getInfo.html
 */

// create a new Flickr API client. since we're requesting a
// resource that doesn't require user authentication, we can
// simply pass our API key as a query param.

var flickr = new Flickr(req => req.query({
	api_key: process.env.FLICKR_API_KEY
}));

// call the flickr.photos.getInfo API method and request photo data!

flickr.photos.getInfo({
	photo_id: 25825763
}).then(function (res) {
	console.log('yay!', res.body);
}).catch(function (err) {
	console.error('bonk', err);
});
