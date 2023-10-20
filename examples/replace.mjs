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
 * This example demonstrates how to use the Replace API.
 * https://www.flickr.com/services/api/replace.api.html
 * @example
 *   pass in the photo ID to replace over ARGV
 *   $ node --env-file .env  examples/replace.js 12345
 */

const photoID = process.argv[2]

// replace requires auth with "write" perms. for this example, we'll use
// oauth as the authentication method. first, sign up for an application
// to get a consumer key and secret and use the oauth flow to obtain an
// oauth token and secret.
// https://www.flickr.com/services/apps/create/apply/?

const { replace } = createFlickr({
  consumerKey: process.env.FLICKR_CONSUMER_KEY,
  consumerSecret: process.env.FLICKR_CONSUMER_SECRET,
  oauthToken: process.env.FLICKR_OAUTH_TOKEN,
  oauthTokenSecret: process.env.FLICKR_OAUTH_TOKEN_SECRET,
})

// create a new replace instance. the photo ID to replace must exist
// and be owned by the calling user. the photo param can be anything
// that superagent accepts.

const { id } = await replace(photoID, resolve("examples//replace.png"))

console.log("replace successful! photo id=%s", id)
