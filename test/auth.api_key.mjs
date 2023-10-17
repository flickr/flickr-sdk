// @ts-check
import { APIKeyAuth } from "../dist/index.js"
import * as assert from "node:assert"
import { describe, it } from "node:test"

describe("auth/api_key", function () {
  describe("#sign", function () {
    it("adds the API key to a URL", async function () {
      const auth = new APIKeyAuth("abcd1234")
      const req = new Request("https://api.flickr.com/services/rest")
      const params = new Map()

      await auth.sign(req, params)

      assert.strictEqual(params.get("api_key"), "abcd1234")
    })
  })
})
