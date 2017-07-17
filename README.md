# flickr-sdk

Almost certainly the best Flickr API client in the world for node and the browser

## install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i flickr-sdk --save-dev
```

## usage

The Flickr API is divided into several services:

* The [REST API](https://www.flickr.com/services/api/) service, which provides access to Flickr data
* The [OAuth](https://www.flickr.com/services/api/auth.oauth.html) service, which authenticates users via OAuth 1.0
* The [Feeds](https://www.flickr.com/services/feeds/) service, which provides feeds of public Flickr data
* The [Upload](https://www.flickr.com/services/api/upload.api.html) services, where you can upload photos!

```js
var Flickr = require('flickr-sdk');
```

> flickr-sdk is based on [superagent](https://github.com/visionmedia/superagent/) and all methods that make API calls will return a superagent Request instance configured for the request. This means you can do anything with Flickr requests that you can do with superagent.

## REST API

### [Flickr](services/rest.js#L71)

Creates a new Flickr REST API client.

You **must** pass an authentication plugin as the first parameter.
If you're using OAuth, we have a [convenience method][#TODO]
to create a plugin function.

**Params**

* **{Function}**: auth

**Example**

```js
var flickr = new Flickr(req => req.query({
  api_key: process.env.FLICKR_API_KEY
}));
```

All of the [REST API](https://www.flickr.com/services/api/) methods are available on the Flickr prototype. Refer to the [REST API](https://www.flickr.com/services/api/) docs for the full list of methods and how to use each one.

The Flickr client instance exactly mirrors the namespaces of each REST API method.

##### [flickr.photos.getInfo](https://www.flickr.com/services/api/flickr.photos.getInfo.html)([args])

```js
var flickr = new Flickr(res => res.query({
  api_key: process.env.FLICKR_API_KEY
}));

flickr.photos.getInfo({
  photo_id: 25825763 // sorry, @dokas
}).then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```

> We have a working [example](https://www.flickr.com/services/api/flickr.photos.getInfo.html) of using the flickr.photos.getInfo API method.

##### [flickr.photos.search](https://www.flickr.com/services/api/flickr.photos.search.html)([args])

```js
var flickr = new Flickr(res => res.query({
  api_key: process.env.FLICKR_API_KEY
}));

flickr.photos.search({
  photo_id: 25825763 // sorry, @dokas
}).then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```

> We have a working [example](https://www.flickr.com/services/api/flickr.photos.search.html) of using the flickr.photos.search API method.

## OAuth API

### [OAuth](services/oauth.js#L30)

Creates a new OAuth service instance. You can use this service to request and validate OAuth tokens, as well as generate an auth plugin suitable for use with the REST and Upload services.

You need to [register an application](https://www.flickr.com/services/apps/create/)
to obtain your `consumerKey` and `consumerSecret`.

**Params**

* **{String}**: consumerKey - The application's API key
* **{String}**: consumerSecret - The application's API secret

**Example**

```js
var oauth = new Flickr.OAuth(
  process.env.FLICKR_CONSUMER_KEY,
  process.env.FLICKR_CONSUMER_SECRET
);
```

### [.request](services/oauth.js#L59)

Get a Request Token using the consumer key.

**Params**

* **{String}**: oauthCallback
* `returns` **{Request}**

**Example**

```js
oauth.request('http://localhost:3000/oauth/callback').then(function (res) {
  console.log('yay!', res);
}).catch(function (err) {
  console.error('bonk', err);
});
```

### [.authorizeUrl](services/oauth.js#L92)

Returns the authorization url for `requestToken`. You may also pass the `perms` your app is requesting as `read` (the default), `write`, or `delete`. Your application should redirect the user here to ask them to verify your request token.

**Params**

* **{String}**: requestToken
* **{String}**: perms
* `returns` **{String}**

**Example**

```js
var url = oauth.authorizeUrl(requestToken); // "https://www.flickr.com/services/oauth..."

res.setHeader("Location", url);
res.statusCode = 302;
res.end();
```

### [.verify](services/oauth.js#L131)

Verify an OAuth token using the verifier and token secret. If your user has indeed verified your request token, you will receive an OAuth token and secret back, as well as some very basic profile information. You can now use this token and secret to make calls to the REST API.

**Params**

* **{String}**: oauthToken
* **{String}**: oauthVerifier
* **{String}**: tokenSecret
* `returns` **{Request}**

**Example**

```js
oauth.verify(oauthToken, oauthVerifier, tokenSecret).then(function (res) {
  console.log('oauth token:', res.body.oauth_token);
  console.log('oauth token secret:', res.body.oauth_token_secret);
}).catch(function (err) {
 console.log('bonk', err);
});
```

### [.plugin](services/oauth.js#L168)

Returns an oauth plugin for this consumer key and secret.

**Params**

* **{String}**: oauthToken
* **{String}**: oauthTokenSecret
* `returns` **{Function}**

**Example**

```js
var flickr = new Flickr(oauth.plugin(
  oauthToken,
  oauthTokenSecret
));
```

## Feeds API

### [Feeds](services/feeds.js#L24)

Creates a new Feeds service instance. You can use this instance to explore and retrieve public Flickr API data.

**Params**

* **{Object}**: args - Arguments that will be passed along with every feed request
* **{String}**: args.format - The feed response format
* **{String}**: args.lang - The language to request for the feed

**Example**

```js
var feeds = new Flickr.Feeds();
```

### [.publicPhotos](services/feeds.js#L51)

Returns a list of public content matching some criteria.

**Params**

* **{Object}**: args
* `returns` **{Request}**

### [.friendsPhotos](services/feeds.js#L65)

Returns a list of public content from the contacts, friends & family of a given person.

**Params**

* **{Object}**: args
* **{Number|String}**: args.user_id - The user ID of the user to fetch friends' photos and videos for.
* `returns` **{Request}**

### [.favePhotos](services/feeds.js#L81)

Returns a list of public favorites for a given user.

**Params**

* **{Object}**: args
* **{Number|String}**: id - A single user ID. This specifies a user to fetch for.
* `returns` **{Request}**

### [.groupDiscussions](services/feeds.js#L100)

Returns a list of recent discussions in a given group.

**Params**

* **{Object}**: args
* **{Number}**: args.id - The ID of the group to fetch discussions for.
* `returns` **{Request}**

### [.groupPool](services/feeds.js#L116)

Returns a list of things recently added to the pool of a given group.

**Params**

* **{Object}**: args
* **{Number}**: args.id - The ID of the group to fetch for.
* `returns` **{Request}**

### [.forum](services/feeds.js#L131)

Returns a list of recent topics from the forum.

**Params**

* **{Object}**: args
* `returns` **{Request}**

### [.recentActivity](services/feeds.js#L145)

Returns a list of recent comments on photostream and sets belonging to a given user.

**Params**

* **{Object}**: args
* **{Number|String}**: args.user_id - The user ID to fetch recent activity for.
* `returns` **{Request}**

### [.recentComments](services/feeds.js#L161)

Returns a list of recent comments that have been commented on by a given person.

**Params**

* **{Object}**: args
* **{Number|String}**: args.user_id - The user ID to fetch recent comments for.
* `returns` **{Request}**

## Upload API

### [Upload](services/upload.js#L37)

Creates a new Upload service instance. Since the Upload API only does one thing (upload files), an Upload instance is simply a Request subclass.

You **must** pass an authentication plugin as the first parameter.
If you're using OAuth, we have a [convenience method][#TODO]
to create a plugin function.

**Params**

* **{Function}**: auth
* **{String|fs.ReadStream|Buffer}**: file
* **{Object}**: args

**Example**

```js
var upload = new Flickr.Upload(auth, 'upload.png', {
  title: 'Works on MY machine!'
});

upload.then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```

## license

Code licensed under the MIT license. See LICENSE file for terms.