// @ts-check
import { describe, it } from "node:test"
import * as assert from "node:assert"
import { createFlickr } from "../dist/index.mjs"

describe("flickr", function () {
  it("throws an error if no api key is provided", function () {
    // @ts-expect-error
    assert.throws(() => createFlickr(), {
      message: "Invalid auth config",
    })
  })

  it("creates a flickr function with an API key", function () {
    const { flickr } = createFlickr("abcd1234")
    assert.strictEqual(typeof flickr, "function")
  })

  it("creates a flickr function with OAuth credentials", function () {
    assert.doesNotThrow(() =>
      createFlickr({
        consumerKey: "abc123",
        consumerSecret: "def456",
        oauthToken: false,
        oauthTokenSecret: false,
      }),
    )

    assert.doesNotThrow(() =>
      createFlickr({
        consumerKey: "abc123",
        consumerSecret: "def456",
        oauthToken: "foo",
        oauthTokenSecret: "bar",
      }),
    )
  })
})
