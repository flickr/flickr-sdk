// @ts-check
/// <reference types="../dist/index.d.ts" />
import { createFlickr } from "../dist/index.js"
import { ok } from "node:assert"

/**
 * This example demonstrates how to use public REST API methods:
 * https://www.flickr.com/services/api/
 * https://www.flickr.com/services/api/flickr.photos.search.html
 */

ok(process.env.FLICKR_API_KEY, "missing FLICKR_API_KEY environment variable")

// create a new Flickr API client. since we're requesting a
// resource that doesn't require user authentication, we can
// just use our API key.

const { flickr } = createFlickr(process.env.FLICKR_API_KEY)

// call the flickr.photos.search API method and search the photos!

const { stat, photos } = await flickr("flickr.photos.search", {
  text: "doggo",
})

console.log("yay! stat=%s", stat, photos)
