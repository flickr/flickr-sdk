# flickr-sdk

## install

`npm install flickr-sdk`

## build from source

Run `make` after cloning the repo to install pre-commit/pre-push hooks.

Run `npm install` to install all the dependencies.

Run `npm run build` to build the SDK.

## tests

Run `npm test` to execute the test suite.

Run `npm run coverage` to execute the test suite with code coverage statistics.

## use

### getting a public photo
```js
var Flickr = require('flickr-sdk');
var flickr = new Flickr({ api_key: 'abcd1234' });

flickr.photos.getInfo({ photo: '123456789' })
.then(function (res) {
	// get the photo data off res
});
```

See the [Example Repo](https://github.com/flickr/flickr-sdk-examples) for more examples, including searching and authenticating.

### docs
[Flickr API Docs](https://www.flickr.com/services/api)
[Flickr Feed Docs](https://www.flickr.com/services/feeds/)

## license

Code licensed under the MIT license. See LICENSE file for terms.
