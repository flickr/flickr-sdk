// @ts-check
/// <reference types="../dist/index.d.ts" />
import { createFlickr } from "../dist/index.js"
import { ok } from "node:assert"

/**
 * This example demonstrates how to use public REST API methods:
 * https://www.flickr.com/services/api/
 * https://www.flickr.com/services/api/flickr.photos.getInfo.html
 */

ok(process.env.FLICKR_API_KEY, "missing FLICKR_API_KEY environment variable")

// create a new Flickr API client. since we're requesting a
// resource that doesn't require user authentication, we can
// just use our API key.
const { flickr } = createFlickr(process.env.FLICKR_API_KEY)

// call the flickr.photos.getInfo API method and request photo data!
const { stat, photo } = await flickr("flickr.photos.getInfo", {
  photo_id: "25825763",
})

console.log("yay! stat=%s", stat, photo)
