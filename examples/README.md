# Examples

Many of the Flickr API services require an API key or user authentication.
Before using these examples, sign up for an app here:

https://www.flickr.com/services/apps/create/

Many of these examples require one or more of the following environment
variables:

| Variable                    | Value                                     |
| --------------------------- | ----------------------------------------- |
| `FLICKR_API_KEY`            | Your application's API key<sup>*</sup>    |
| `FLICKR_CONSUMER_KEY`       | Your application's API key<sup>†</sup>    |
| `FLICKR_CONSUMER_SECRET`    | Your application's API secret<sup>†</sup> |
| `FLICKR_OAUTH_TOKEN`        | A verified OAuth token<sup>‡</sup>        |
| `FLICKR_OAUTH_TOKEN_SECRET` | A verified OAuth token secret<sup>‡</sup> |

- <sup>*</sup> Required for public REST API methods
- <sup>†</sup> Required for obtaining an OAuth token
- <sup>‡</sup> Required for OAuth signing

### flickr.photos.getInfo.js

This example demonstrates how to use the Flickr REST API to retrieve public information about a photo.

```
$ export FLICKR_API_KEY=# your api key
$ node ./flickr.photos.getInfo.mjs
```

### flickr.photos.search.js

This example demonstrates how to use the Flickr REST API to search for photos.

```
$ export FLICKR_API_KEY=# your api key
$ node ./flickr.photos.search.mjs
```

### oauth.js

This example demonstrates how to use the OAuth service to obtain an OAuth token and secret to make requests on behalf of a user.

OAuth callback URLs **must be https**, so this example's server needs an SSL cert to run. Generate a self-signed cert by running `make` in this directory.

```
$ make
$ export FLICKR_CONSUMER_KEY=# your application's key
$ export FLICKR_CONSUMER_SECRET=# your application's secret
$ node ./oauth.mjs
```

### replace.js

This example demonstrates how to replace a photo on behalf of a user.

```
$ export FLICKR_CONSUMER_KEY=# your application's key
$ export FLICKR_CONSUMER_SECRET=# your application's secret
$ export FLICKR_OAUTH_TOKEN=# a verified oauth token
$ export FLICKR_OAUTH_TOKEN_SECRET=# a verified oauth token secret
$ node ./replace.mjs <your photo id>
```

> 💡 Tip: Use the Upload example to upload a photo to replace

### upload.js

This example demonstrates how to upload a photo on behalf of a user.

```
$ export FLICKR_CONSUMER_KEY=# your application's key
$ export FLICKR_CONSUMER_SECRET=# your application's secret
$ export FLICKR_OAUTH_TOKEN=# a verified oauth token
$ export FLICKR_OAUTH_TOKEN_SECRET=# a verified oauth token secret
$ node ./upload.mjs
```

> 💡 Tip: Use the OAuth example to obtain an OAuth token and secret

### Credits

"[The "Works on My Machine" Certification Program Badge](https://blog.codinghorror.com/the-works-on-my-machine-certification-program/)" by [Jeff Atwood](https://blog.codinghorror.com/about-me/) and [Jon Galloway](http://weblogs.asp.net/jgalloway/) is licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) [[source](https://discourse.codinghorror.com/t/the-works-on-my-machine-certification-program/599/82)]
