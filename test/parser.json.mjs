// @ts-check
import assert from "node:assert"
import { JSONParser } from "../dist/index.js"
import { describe, it } from "node:test"

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
