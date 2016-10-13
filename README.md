# flickr-sdk

> TODO everything

## use

### getting a public photo
```
flickrSDK({ api_key: 'abcd1234', photo_id: '12345678'})('flickr.photos.getInfo')
.then(function (res) {
	// get the photo data off res
});
```

### getting a private photo
```
require('flickrSDK')({ api_key: 'abcd1234', photo_id: '987654321'})('flickr.photos.getInfo')
.use(require('flickrSDK/oauth')({
	accessToken: '123',
	accessTokenSecret: '456',
	apiSecret: '54321'
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
