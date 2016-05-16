# Flickr JavaScript SDK

[![Build Status](https://travis-ci.org/flickr/flickr-sdk.svg?branch=master)](https://travis-ci.org/flickr/flickr-sdk) [![Coverage Status](https://coveralls.io/repos/github/flickr/flickr-sdk/badge.svg?branch=master)](https://coveralls.io/github/flickr/flickr-sdk?branch=master)

The easiest way to talk to the [Flickr API](https://www.flickr.com/services/api/) with node.js or a web browser. Officially supported by the Flickr Front End team.

Currently we cover the 10 most popular API methods (and some others) but we'll be adding support for more all the time.




## Install

`npm install flickr-sdk`




## What You Need First

You'll need to [create an API key for your app](https://www.flickr.com/services/apps/create/apply/), [get a user to grant your app access to their data](https://www.flickr.com/services/api/auth.oauth.html). Implementing that process and storing a user's oauth token and secret is your job. [Here's a tool](https://github.com/bertrandom/flickr-oauth-dance) that walks you through that process quickly so you can start testing.




## Implementation


### Setup

```js
var Flickr = require('flickr-sdk');

var flickr = new Flickr({
	"apiKey":            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
	"apiSecret":         "xxxxxxxxxxxxxxxx",
	"accessToken":       "xxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx",
	"accessTokenSecret": "xxxxxxxxxxxxxxxx"
});
```



### Responses

All responses are objects with two properties:

* `body` - containing the data requested
* `headers` - any meta data returned in the headers from the API



### Functions

#### Media

##### Uploading media

```js
flickr
.request()
.media()
.post({
	'photo': './path/to/photo.jpg'
})
.then(function (response) {
	// Photo object with links to resources
});
```

On the server the photo parameter should be a path to a local file. On the client it'll accept a `File` object from a browser file field.

##### Fetching media

```js
flickr
.request()
.media('22397283330')
.get()
.then(function (response) {
	// Photo object with links to resources
});
```

##### Searching for media

```js
flickr
.request()
.media()
.search("puppies")
.get()
.then(function (response) {
	// An array of media objects matching the search term
});
```

#### People

##### Person's Media

```js
flickr
.request()
.people("40575690@N00") // ID or path alias
.media()
.get()
.then(function (response) {
	// An array of media objects belonging to the person
});
```

##### Person's Favorites

```js
flickr
.request()
.people("40575690@N00") // ID or path alias
.favorites()
.media()
.get()
.then(function (response) {
	// An array of media objects this person has faved
});
```

##### Person's Albums

```js
flickr
.request()
.people("40575690@N00") // ID or path alias
.albums()
.get()
.then(function (response) {
	// An array of album objects belonging to this person
});
```

#### Contexts

```js
flickrSDK
.request()
.media('22397283330') // Photo ID to fetch context for
.context(5) // Number of photos to get either side of this one
.album('72157657634723246') // An album ID
.get()
.then(function (response) {
	// Two arrays of photo objects, one for previous, one for next
});
```

Other contexts available:

```js
flickr.request().media(*photoID*).context(5).photolist(*photolistHash*)
flickr.request().media(*photoID*).context(5).photosOf(*personID*)
flickr.request().media(*photoID*).context(5).groupPool(*groupID*)
flickr.request().media(*photoID*).context(5).sharedEntity(*guestpassID*, *guestpassOwner*)
flickr.request().media(*photoID*).context(5).gallery(*galleryID*)
flickr.request().media(*photoID*).context(5).photostream()
flickr.request().media(*photoID*).context(5).favorites(*personID*)
```

#### Groups

```js
flickr
.request()
.groups('22397283330') // Group ID
.get()
.then(function (response) {
	// Info about a group
});
```

##### Group Media

```js
flickr
.request()
.groups('22397283330')
.media()
.get()
.then(function (response) {
	// A bunch of photos in a group
});
```

##### Group Discussions

```js
flickr
.request()
.groups('22397283330')
.discussions()
.get()
.then(function (response) {
	// Discussions happening in this group
});
```

#### Album Media

```js
flickr
.request()
.albums('22397283330') // Album ID
.media()
.get()
.then(function (response) {
	// Photos in an album
});
```

#### Gallery Media

```js
flickr
.request()
.galleries('22397283330') // Gallery ID
.media()
.get()
.then(function (response) {
	// Photos in a gallery
});
```

## Handing Over Extra Parameters

Most methods accept a number of parameters to modify the response. Page and per page parameters are a common example.
You can pass arbitrary as an object argument into the verb method like this:

```js
flickr
.request()
.people("40575690@N00")
.media()
.get({
	page: 2,
	per_page: 20
})
.then(function (response) {
	// Media items from 21-40
});
```

Here's a more advanced search example:

```js
flickr
.request()
.media()
.search("puppies")
.get({
	contacts: 'all', // Only media from the calling user's contacts
	media: 'photos' // Only photos, no videos
	sort: 'date-taken-desc' // Ordered by most recently taken photos
})
.then(function (response) {
	// An array of media objects matching the search query including extra params
});
```

## Handling Errors

All API calls return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
To handle an error just a provide a handler like this:

```js
flickr
.request()
.people("🦄") // not a person ID at all
.media()
.get()
.then(function (response) {
	// Success, we'll never get here
}, function (err) {
	// Handle the error
});
```


## Compatibility and Browser Support

* Latest Chrome
* Latest Safari
* Latest Firefox
* Latest Mobile Safari
* IE 10+ for sure, maybe 9 too
* Node 0.10+

## License

Code licensed under the MIT license. See LICENSE file for terms.