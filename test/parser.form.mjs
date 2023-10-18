// @ts-check
import { describe, it } from "node:test"
import * as assert from "node:assert"
import { FormParser } from "../dist/index.mjs"

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
