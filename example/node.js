/**
 *
 * Node.js FlickrSDK Example
 *
 * This example gives you a sample of how the FlickrSDK can be
 * used on a Node.JS server to add authenticated calls to your application
 *
 * You can run the example by running `node examples/node.js` and then browsing
 * to http://localhost:8080/
 *
 */

var http = require('http');
var querystring = require('querystring');
var FlickrSDK = require('..');

var PRIVATE_PHOTO_ID = "xxxxxx"; // replace this with a private photo

// Initialize the FlickrSDK
var flickrSDK = new FlickrSDK({
    apiKey: 'xxxxxxxxx', // your api key
	apiSecret: 'xxxxxxxxx' // your api secret
});

// a cache to store tokens
var oauthHash = {};

// The login route, which calls the API to get a request token
function loginRoute (request, response) {
	flickrSDK
	.request()
	.authentication()
	// Flickr will redirect to this URL when the user authorizes
	.prepareRequestToken('http://localhost:8080/authed')
	.then(function (data) {
		// save to token secret
		oauthHash[data['oauth_token']] = data['oauth_token_secret'];
		// response with a basic HTML page with login link for the user
		response.end(
			  '<html><head><title>Log in</title></head>'
			+ '<body><h1>Log in!</h1>'
			+ '<a href="'
			+ data.authorizationURL
			+ '">Log in to Flickr</a>'
			+ '</body></html>'
		);
	}, function (resp) {
		response.end(resp);
	});
}

// This route is called by Flickr when the user
// authorizes.  In this route we save the access token secret to our cache
// and use the token itself in the URL to identify the user.  In practice, you
// would probably use some other method (cookies, etc...) to associate the
// token with the user
function authCallbackRoute (request, response) {
	var queryParams = request.url.split('?');
	// parse the token and verifier from the query string returned by Flickr
	var paramObj = querystring.parse(queryParams[1]);

	if (!paramObj['oauth_token'] || !paramObj['oauth_verifier'] || !oauthHash[paramObj['oauth_token']]) {
		// redirect to login
		response.writeHead(302, {
			'Location': '/'
		});
		response.end();
		return;
	}

	// grab the secret we stored earlier
	var oauthTokenSecret = oauthHash[paramObj['oauth_token']];

	flickrSDK
	.request()
	.authentication()
	.authenticateUser(paramObj['oauth_token'], oauthTokenSecret, paramObj['oauth_verifier'])
	.then(function (data) {

		// swap the tokens in our cache
		oauthHash[data['oauth_token']] = oauthHash[paramObj['oauth_token']];
		delete oauthHash[paramObj['oauth_token']];

		// redirect to our photos page with the token
		response.writeHead(302, {
			'Location': '/getPhotos?token=' + data['oauth_token']
		});
		response.end();
	});
}

// this route display a private photo, if the user has authorized
function showPhotosRoute (request, response) {
	var queryParams = request.url.split('?');
	// parse the token and verifier from the query string returned by Flickr
	var paramObj = querystring.parse(queryParams[1]);

	if (!paramObj['token'] || !oauthHash[paramObj['token']]) {
		// redirect to login
		response.writeHead(302, {
			'Location': '/'
		});
		response.end();
		return;
	}

	flickrSDK
	// make the request with the access token and secret
	.request(paramObj['token'], oauthHash[paramObj['token']])
	.media(PRIVATE_PHOTO_ID)
	.get()
	.then(function (responseData) {
		var photosHTML = '';

		// create HTML for the photos
		// ideally you'd use a template or something better
		// but this is a demo
		if (responseData.body && responseData.body.photo) {
			var photo = responseData.body.photo;
			photosHTML += '<img src="';
			// see the documentation on how urls are built on flickr
			// https://www.flickr.com/services/api/misc.urls.html
			photosHTML += 'https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg'.replace('{farm-id}', photo.farm).replace('{server-id}', photo.server).replace('{id}', photo.id).replace('{secret}', photo.secret);
			photosHTML += '">';

		} else {
			photosHTML = 'No photos found.';
		}
		response.end(
			  '<html><head><title>Photos</title></head>'
			+ '<body><h1>Flickr Search Photo Results</h1><br><div class="photos">'
			+ photosHTML
			+ '</body></html>'
		);
	}, function (err) {
		response.end(err.message);
	});
}

// set up the routes
var server = http.createServer(function (request, response) {

	// do the log in logic
	if (request.url === '/') {
		loginRoute(request, response);
	} else if (request.url.indexOf("/authed") === 0) {
		authCallbackRoute(request, response);
	} else if (request.url.indexOf('/getPhotos') === 0) {
		showPhotosRoute(request, response);
	}

});

//Lets start our server
server.listen(8080, function() {
	console.log('Visit localhost:8080/ to log in');
});

