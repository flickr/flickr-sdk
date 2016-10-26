# flickr-sdk

> TODO everything

## use

### getting a public photo
```
var Flickr = require('flickr-sdk');
var flickr = new Flickr({ api_key: 'abcd1234' });

flickr.photos.getInfo({ photo: '123456789' })
.then(function (res) {
	// get the photo data off res
});
```

See the [Example Repo](https://github.com/flickr/flickr-sdk-examples) for more examples, including searching and authenticating.

## troubleshooting

##### ReferenceError: Promise is not defined

superagent's Promise support assumes a Promise implementation is available globally. If you are using node 0.10, you will have to polyfill the global Promise manually.

## license

Code licensed under the MIT license. See LICENSE file for terms.
