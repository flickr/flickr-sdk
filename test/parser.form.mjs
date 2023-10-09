// @ts-check
import assert from "node:assert"
import { FormParser } from "../dist/index.js"
import { describe, it } from "node:test"

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
