# flickr-sdk

Almost certainly the best Flickr API client in the world for node and the browser

## install

```
$ npm install flickr-sdk
```

## usage

flickr-sdk is based on [superagent][] and all methods that make API calls will return a superagent Request instance configured for the request. This means that you can do anything with Flickr requests that you can do with superagent.

The Flickr API is divided into several services:

- The [REST API][services/api] service, which provides access to Flickr data
- The [OAuth][services/oauth] service, which authenticates users via OAuth 1.0
- The [Feeds][services/feeds] service, which provides feeds of public Flickr data
- The [Upload][services/upload] service, where you can upload photos!

**Example**

``` js
var Flickr = require('flickr-sdk');
```
<a name="Flickr"></a>

## Flickr
**Kind**: global class  

* [Flickr](#Flickr)
    * [new Flickr(auth)](#new_Flickr_new)
    * [.OAuth](#Flickr.OAuth)
        * [new OAuth(consumerKey, consumerSecret)](#new_Flickr.OAuth_new)
        * [.request(oauthCallback)](#Flickr.OAuth+request) ⇒ <code>Request</code>
        * [.authorizeUrl(requestToken, [perms])](#Flickr.OAuth+authorizeUrl) ⇒ <code>String</code>
        * [.verify(oauthToken, oauthVerifier, tokenSecret)](#Flickr.OAuth+verify) ⇒ <code>Request</code>
        * [.plugin(oauthToken, oauthTokenSecret)](#Flickr.OAuth+plugin) ⇒ <code>function</code>
    * [.Upload](#Flickr.Upload)
        * [new Upload(auth, file, [args])](#new_Flickr.Upload_new)
    * [.Feeds](#Flickr.Feeds)
        * [new Feeds([args])](#new_Flickr.Feeds_new)
        * [.publicPhotos([args])](#Flickr.Feeds+publicPhotos) ⇒ <code>Request</code>
        * [.friendsPhotos(args)](#Flickr.Feeds+friendsPhotos) ⇒ <code>Request</code>
        * [.favePhotos(args)](#Flickr.Feeds+favePhotos) ⇒ <code>Request</code>
        * [.groupDiscussions(args)](#Flickr.Feeds+groupDiscussions) ⇒ <code>Request</code>
        * [.groupPool(args)](#Flickr.Feeds+groupPool) ⇒ <code>Request</code>
        * [.forum([args])](#Flickr.Feeds+forum) ⇒ <code>Request</code>
        * [.recentActivity(args)](#Flickr.Feeds+recentActivity) ⇒ <code>Request</code>
        * [.recentComments(args)](#Flickr.Feeds+recentComments) ⇒ <code>Request</code>

<a name="new_Flickr_new"></a>

### new Flickr(auth)
Creates a new Flickr REST API client.

You **must** pass a superagent plugin as the first parameter. For
methods that don't require authentication, this plugin can simply
add your API key to the request params. For methods that require
authentication, use the OAuth plugin.

All of the [REST API][services/api] methods are available on the
Flickr prototype. Each method accepts a single parameter which
is an optional hash of arguments. Refer to the [REST API][services/api]
docs for the full list of methods and their supported arguments.


| Param | Type | Description |
| --- | --- | --- |
| auth | <code>function</code> | An authentication plugin function |

**Example** *(Get info about a public photo with your API key)*  
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
**Example** *(Searching for public photos with your API key)*  
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
**Example** *(Authenticate as a user with the OAuth plugin)*  
```js

var flickr = new Flickr((new Flickr.OAuth(
  process.env.FLICKR_CONSUMER_KEY,
  process.env.FLICKR_CONSUMER_SECRET
)).plugin(
  process.env.FLICKR_OAUTH_TOKEN,
  process.env.FLICKR_OAUTH_TOKEN_SECRET
));

flickr.test.login().then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});
```
<a name="Flickr.OAuth"></a>

### Flickr.OAuth
**Kind**: static class of [<code>Flickr</code>](#Flickr)  

* [.OAuth](#Flickr.OAuth)
    * [new OAuth(consumerKey, consumerSecret)](#new_Flickr.OAuth_new)
    * [.request(oauthCallback)](#Flickr.OAuth+request) ⇒ <code>Request</code>
    * [.authorizeUrl(requestToken, [perms])](#Flickr.OAuth+authorizeUrl) ⇒ <code>String</code>
    * [.verify(oauthToken, oauthVerifier, tokenSecret)](#Flickr.OAuth+verify) ⇒ <code>Request</code>
    * [.plugin(oauthToken, oauthTokenSecret)](#Flickr.OAuth+plugin) ⇒ <code>function</code>

<a name="new_Flickr.OAuth_new"></a>

#### new OAuth(consumerKey, consumerSecret)
Creates a new OAuth service instance. You can use this service to
request and validate OAuth tokens, as well as generate an auth
plugin suitable for use with the REST and Upload services.

You need to [register an application](https://www.flickr.com/services/apps/create/)
to obtain your `consumerKey` and `consumerSecret`.


| Param | Type | Description |
| --- | --- | --- |
| consumerKey | <code>String</code> | The application's API key |
| consumerSecret | <code>String</code> | The application's API secret |

**Example**  
```js
var oauth = new Flickr.OAuth(
  process.env.FLICKR_CONSUMER_KEY,
  process.env.FLICKR_CONSUMER_SECRET
);
```
<a name="Flickr.OAuth+request"></a>

#### oAuth.request(oauthCallback) ⇒ <code>Request</code>
Get a Request Token using the consumer key.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  
**See**

- https://github.com/visionmedia/superagent
- https://www.flickr.com/services/api/auth.oauth.html#request_token


| Param | Type | Description |
| --- | --- | --- |
| oauthCallback | <code>String</code> | Your application's OAuth callback URL |

**Example**  
```js
oauth.request('http://localhost:3000/oauth/callback').then(function (res) {
  console.log('yay!', res);
}).catch(function (err) {
  console.error('bonk', err);
});
```
<a name="Flickr.OAuth+authorizeUrl"></a>

#### oAuth.authorizeUrl(requestToken, [perms]) ⇒ <code>String</code>
Returns the authorization url for `requestToken`. You may also pass
the `perms` your app is requesting as `read` (the default), `write`,
or `delete`. Your application should redirect the user here to ask
them to verify your request token.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  
**See**: https://www.flickr.com/services/api/auth.oauth.html#authorization  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| requestToken | <code>String</code> |  | The OAuth request token |
| [perms] | <code>String</code> | <code>read</code> | Permission level, may be "read", "write" or "delete" |

**Example**  
```js
var url = oauth.authorizeUrl(requestToken); // "https://www.flickr.com/services/oauth..."

res.setHeader("Location", url);
res.statusCode = 302;
res.end();
```
<a name="Flickr.OAuth+verify"></a>

#### oAuth.verify(oauthToken, oauthVerifier, tokenSecret) ⇒ <code>Request</code>
Verify an OAuth token using the verifier and token secret. If your user
has indeed verified your request token, you will receive an OAuth token
and secret back, as well as some very basic profile information. You
can now use this token and secret to make calls to the REST API.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  
**See**

- https://github.com/visionmedia/superagent
- https://www.flickr.com/services/api/auth.oauth.html#access_token


| Param | Type | Description |
| --- | --- | --- |
| oauthToken | <code>String</code> | The OAuth token to verify |
| oauthVerifier | <code>String</code> | The OAuth token verifier string you received from the callback |
| tokenSecret | <code>String</code> | The OAuth token secret |

**Example**  
```js
oauth.verify(oauthToken, oauthVerifier, tokenSecret).then(function (res) {
  console.log('oauth token:', res.body.oauth_token);
  console.log('oauth token secret:', res.body.oauth_token_secret);
}).catch(function (err) {
 console.log('bonk', err);
});
```
<a name="Flickr.OAuth+plugin"></a>

#### oAuth.plugin(oauthToken, oauthTokenSecret) ⇒ <code>function</code>
Returns an oauth plugin for this consumer key and secret.

**Kind**: instance method of [<code>OAuth</code>](#Flickr.OAuth)  

| Param | Type | Description |
| --- | --- | --- |
| oauthToken | <code>String</code> | The OAuth token |
| oauthTokenSecret | <code>String</code> | The OAuth token secret |

**Example**  
```js
var flickr = new Flickr(oauth.plugin(
  oauthToken,
  oauthTokenSecret
));
```
<a name="Flickr.Upload"></a>

### Flickr.Upload
**Kind**: static class of [<code>Flickr</code>](#Flickr)  
**See**: https://www.flickr.com/services/api/upload.api.html  
<a name="new_Flickr.Upload_new"></a>

#### new Upload(auth, file, [args])
Creates a new Upload service instance. Since the Upload API only
does one thing (upload files), an Upload instance is simply
a Request subclass.

You **must** pass an authentication plugin as the first parameter.
If you're using OAuth, we have a [convenience method][#TODO]
to create a plugin function.


| Param | Type |
| --- | --- |
| auth | <code>function</code> | 
| file | <code>String</code> \| <code>fs.ReadStream</code> \| <code>Buffer</code> | 
| [args] | <code>Object</code> | 

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
<a name="Flickr.Feeds"></a>

### Flickr.Feeds
**Kind**: static class of [<code>Flickr</code>](#Flickr)  

* [.Feeds](#Flickr.Feeds)
    * [new Feeds([args])](#new_Flickr.Feeds_new)
    * [.publicPhotos([args])](#Flickr.Feeds+publicPhotos) ⇒ <code>Request</code>
    * [.friendsPhotos(args)](#Flickr.Feeds+friendsPhotos) ⇒ <code>Request</code>
    * [.favePhotos(args)](#Flickr.Feeds+favePhotos) ⇒ <code>Request</code>
    * [.groupDiscussions(args)](#Flickr.Feeds+groupDiscussions) ⇒ <code>Request</code>
    * [.groupPool(args)](#Flickr.Feeds+groupPool) ⇒ <code>Request</code>
    * [.forum([args])](#Flickr.Feeds+forum) ⇒ <code>Request</code>
    * [.recentActivity(args)](#Flickr.Feeds+recentActivity) ⇒ <code>Request</code>
    * [.recentComments(args)](#Flickr.Feeds+recentComments) ⇒ <code>Request</code>

<a name="new_Flickr.Feeds_new"></a>

#### new Feeds([args])
Creates a new Feeds service instance. You can use this instance
to explore and retrieve public Flickr API data.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [args] | <code>Object</code> |  | Arguments that will be passed along with every feed request |
| [args.format] | <code>String</code> | <code>json</code> | The feed response format |
| [args.lang] | <code>String</code> | <code>en-us</code> | The language to request for the feed |

**Example**  
```js
var feeds = new Flickr.Feeds();
```
<a name="Flickr.Feeds+publicPhotos"></a>

#### feeds.publicPhotos([args]) ⇒ <code>Request</code>
Returns a list of public content matching some criteria.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_public/  

| Param | Type |
| --- | --- |
| [args] | <code>Object</code> | 

<a name="Flickr.Feeds+friendsPhotos"></a>

#### feeds.friendsPhotos(args) ⇒ <code>Request</code>
Returns a list of public content from the contacts, friends & family of a given person.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_friends/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.user_id | <code>Number</code> \| <code>String</code> | The user ID of the user to fetch friends' photos and videos for. |

<a name="Flickr.Feeds+favePhotos"></a>

#### feeds.favePhotos(args) ⇒ <code>Request</code>
Returns a list of public favorites for a given user.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_faves/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.id | <code>Number</code> \| <code>String</code> | A single user ID. This specifies a user to fetch for. |

<a name="Flickr.Feeds+groupDiscussions"></a>

#### feeds.groupDiscussions(args) ⇒ <code>Request</code>
Returns a list of recent discussions in a given group.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/groups_discuss/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.id | <code>Number</code> | The ID of the group to fetch discussions for. |

<a name="Flickr.Feeds+groupPool"></a>

#### feeds.groupPool(args) ⇒ <code>Request</code>
Returns a list of things recently added to the pool of a given group.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/groups_pool/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.id | <code>Number</code> | The ID of the group to fetch for. |

<a name="Flickr.Feeds+forum"></a>

#### feeds.forum([args]) ⇒ <code>Request</code>
Returns a list of recent topics from the forum.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/forums/  

| Param | Type |
| --- | --- |
| [args] | <code>Object</code> | 

<a name="Flickr.Feeds+recentActivity"></a>

#### feeds.recentActivity(args) ⇒ <code>Request</code>
Returns a list of recent comments on photostream and sets belonging to a given user.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/activity/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.user_id | <code>Number</code> \| <code>String</code> | The user ID to fetch recent activity for. |

<a name="Flickr.Feeds+recentComments"></a>

#### feeds.recentComments(args) ⇒ <code>Request</code>
Returns a list of recent comments that have been commented on by a given person.

**Kind**: instance method of [<code>Feeds</code>](#Flickr.Feeds)  
**See**: https://www.flickr.com/services/feeds/docs/photos_comments/  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.user_id | <code>Number</code> \| <code>String</code> | The user ID to fetch recent comments for. |



## license

Code licensed under the MIT license. See LICENSE file for terms.

[api keys]: https://www.flickr.com/services/api/misc.api_keys.html
[services/api]: https://www.flickr.com/services/api/
[services/oauth]: https://www.flickr.com/services/api/auth.oauth.html
[services/feeds]: https://www.flickr.com/services/feeds/
[services/upload]: https://www.flickr.com/services/api/upload.api.html
[flickr.photos.getInfo]: https://www.flickr.com/services/api/flickr.photos.getInfo.html
[flickr.photos.search]: https://www.flickr.com/services/api/flickr.photos.search.html
[superagent]: https://github.com/visionmedia/superagent/
