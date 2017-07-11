var Flickr = require('..');

/**
 * This example demonstrates how to use the Upload API.
 * https://www.flickr.com/services/api/upload.api.html
 */

// uploads require auth with "write" perms. for this example, we'll use
// oauth as the authentication method. first, sign up for an application
// to get a consumer key and secret and use the oauth flow to obtain an
// oauth token and secret.
// https://www.flickr.com/services/apps/create/apply/?

var auth = (new Flickr.OAuth(
	process.env.FLICKR_CONSUMER_KEY,
	process.env.FLICKR_CONSUMER_SECRET
)).plugin(
	process.env.FLICKR_OAUTH_TOKEN,
	process.env.FLICKR_OAUTH_TOKEN_SECRET
);

// create a new upload instance. the photo param can be anything
// that superagent accepts.

var upload = new Flickr.Upload(auth, __dirname + '/upload.png', {
	title: 'Works on MY machine!'
});

// this is a request instance, so we can just call .then()
// to kick off the request.

upload.then(function (res) {
	console.log('res', res);
}).catch(function (err) {
	console.log('err', err);
});
