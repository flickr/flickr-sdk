var Flickr = require('..');

/**
 * This example demonstrates how to use the Replace API.
 * https://www.flickr.com/services/api/replace.api.html
 */

// replace requires auth with "write" perms. for this example, we'll use
// oauth as the authentication method. first, sign up for an application
// to get a consumer key and secret and use the oauth flow to obtain an
// oauth token and secret.
// https://www.flickr.com/services/apps/create/apply/?

var auth = Flickr.OAuth.createPlugin(
	process.env.FLICKR_CONSUMER_KEY,
	process.env.FLICKR_CONSUMER_SECRET,
	process.env.FLICKR_OAUTH_TOKEN,
	process.env.FLICKR_OAUTH_TOKEN_SECRET
);

// pass in the photo ID to replace over ARGV
// $ node examples/replace.js 41234567890

var photoID = process.argv[2];

// create a new replace instance. the photo ID to replace must exist
// and be owned by the calling user. the photo param can be anything
// that superagent accepts.

var replace = new Flickr.Replace(auth, photoID, __dirname + '/replace.png', {
	title: 'Now in pink!'
});

// this is a request instance, so we can just call .then()
// to kick off the request.

replace.then(function (res) {
	console.log('res', res);
}).catch(function (err) {
	console.log('err', err);
});
