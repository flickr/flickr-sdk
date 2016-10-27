# flickr-sdk

> TODO everything

## use

### getting a public photo
```
var Flickr = require('flickrSDK');
var flickr = new Flickr({ api_key: 'abcd1234' });

flickr.photos.getInfo({ photo: '123456789' })
.then(function (res) {
	// get the photo data off res
});
```

### getting a private photo
```
var Flickr = require('flickrSDK');
var flickr = new Flickr({ api_key: 'abcd1234', api_secret: '54321' });
var oauthPlugin = require('flickrSDK/plugins/oauth');

flickr.photos.getInfo({ photo: '123456789' })
.use(oauthPlugin({
	accessToken: '123',
	accessTokenSecret: '456'
}))
.then(function (res) {
	// get the photo data off res
});
```

## troubleshooting

##### ReferenceError: Promise is not defined

superagent's Promise support assumes a Promise implementation is available globally. If you are using node 0.10, you will have to polyfill the global Promise manually.

## license

Code licensed under the MIT license. See LICENSE file for terms.
