# flickr-sdk

Almost certainly the best Flickr API client in the world for node and the browser

This SDK provides methods and type definitions for all methods listed on https://www.flickr.com/services/api/

To use this SDK, sign up for an API key [here][api key]

## install

```
$ npm install flickr-sdk
```

## quickstart

#### Make a Flickr API call

```js
import { createFlickr } from "flickr-sdk"

const { flickr } = createFlickr("<your Flickr API key>")

const res = await flickr("flickr.photos.getInfo", {
    photo_id: '12345',
})
```

#### Upload a photo

```js
import { createFlickr } from "flickr-sdk"
import { resolve } from "node:path"

const { upload } = createFlickr({
    consumerKey: "<your API key>",
    consumerSecret: "<your API secret>",
    oauthToken: "<the oauth token>",
    oauthTokenSecret: "<the oauth token secret>",
})

const id = await upload(resolve("example.png"), {
    title: "Works on MY machine!",
})
```

## auth

The Flickr SDK currently supports the following auth methods:

#### API Key

This is the simplest way to use the SDK. Just provide your API key as a string:

```js
const { flickr } = createFlickr("<your API key>")
```
#### OAuth 1.0

OAuth lets users grant your application access and then you may act on their
behalf. The OAuth flow is described [here][oauth].

```js
const { upload } = createFlickr({
    consumerKey: "<your API key>",
    consumerSecret: "<your API secret>",
    oauthToken: "<the oauth token>",
    oauthTokenSecret: "<the oauth token secret>",
})
```

> 💡 Use `examples/oauth.mjs` to quickly set up an OAuth flow and obtain a
> set of credentials

## migrating from previous versions

Previous versions of this SDK depended on [superagent][superagent] for http
requests. This version of the SDK uses node's native `fetch` instead, so ou now
only receive the response body back from an API call. This means **the return
value of an API call will only be the response body, not a superagent Request**

Migrating existin code looks like this:

```js
//  old
const res = await flickr.test.login()
console.log(res.body)

// new
const body = await flickr('flickr.test.login')
console.log(body)
```

## advanced

#### configuring fetch

```js
import { createFlickr, FetchTransport } from 'flickr-sdk'

const transport = new FetchTransport({
    headers: {
        'user-agent': 'foo',
    }
})

const { flickr } = createFlickr('<your API key>', transport)
```

#### testing

```js
import { createFlickr, MockTransport, NullAuth } from 'flickr-sdk'
import * as assert from 'node:assert'

// mock transport returns the response you pass in the constructor
const transport = new MockTransport({
    stat: 'ok',
})

// null auth does nothing
const auth = NullAuth()

const { flickr } = createFlickr(auth, transport)

// makes no network request
const res = await flickr('flickr.photos.getInfo', {
    photo_id: '12345',
})

assert.deepStrictEqual(res, { stat: 'ok', foo: 'bar' })
```

[api key]: https://www.flickr.com/services/apps/create/
[oauth]: https://www.flickr.com/services/api/auth.oauth.html
