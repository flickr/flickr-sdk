import { describe, it } from "@jest/globals"
import * as assert from "node:assert"
import { JSONParser } from "flickr-sdk"

describe("JSONParser", function () {
  describe(".parse", function () {
    it("parses a json response and returns an object", async function () {
      const parser = new JSONParser()

      const res = new Response(`{"foo":"bar"}`)

      const obj = await parser.parse(res)

      assert.strictEqual(obj.foo, "bar")
    })
  })
})
