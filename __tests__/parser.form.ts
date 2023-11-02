import { describe, it } from "@jest/globals"
import * as assert from "node:assert"
import { FormParser } from "flickr-sdk"

describe("FormParser", function () {
  describe(".parse", function () {
    it("parses a form response and returns an object", async function () {
      const parser = new FormParser()

      const res = new Response(`foo=bar`)

      const obj = await parser.parse(res)

      assert.strictEqual(obj.foo, "bar")
    })
  })
})
