// @ts-check
import { resolve } from "node:path"
import { createFlickr } from "flickr-sdk"
import { ok } from "node:assert"

ok(process.env.FLICKR_CONSUMER_KEY, "FLICKR_CONSUMER_KEY is required")
ok(process.env.FLICKR_CONSUMER_SECRET, "FLICKR_CONSUMER_SECRET is required")
ok(process.env.FLICKR_OAUTH_TOKEN, "FLICKR_OAUTH_TOKEN is required")
ok(
  process.env.FLICKR_OAUTH_TOKEN_SECRET,
  "FLICKR_OAUTH_TOKEN_SECRET is required",
)

/**
 * This example demonstrates how to use the Upload API.
 * https://www.flickr.com/services/api/upload.api.html
 */

// uploads require auth with "write" perms. for this example, we'll use
// oauth as the authentication method. first, sign up for an application
// to get a consumer key and secret and use the oauth flow to obtain an
// oauth token and secret.
// https://www.flickr.com/services/apps/create/apply/?

const { upload } = createFlickr({
  consumerKey: process.env.FLICKR_CONSUMER_KEY,
  consumerSecret: process.env.FLICKR_CONSUMER_SECRET,
  oauthToken: process.env.FLICKR_OAUTH_TOKEN,
  oauthTokenSecret: process.env.FLICKR_OAUTH_TOKEN_SECRET,
})

const { id } = await upload(resolve("examples/upload.png"), {
  title: "Works on MY machine!",
})

console.log("upload successful! photo id=%s", id)
