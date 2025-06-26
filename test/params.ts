import { describe, it } from "node:test"
import * as assert from "node:assert"
import { GET, POST } from "flickr-sdk"

describe("GET", function () {
  describe(".entries", function () {
    it("returns the searchParams entries", function () {
      const params = new GET()

      params.set("foo", "1")
      params.set("bar", "2")

      const entries = Array.from(params.entries())

      assert.deepStrictEqual(entries, [
        ["foo", "1"],
        ["bar", "2"],
      ])
    })
  })
})

describe("POST", function () {
  describe(".entries", function () {
    it("returns the searchParams entries", function () {
      const params = new POST()

      params.set("foo", "1")
      params.set("bar", "2")

      const entries = Array.from(params.entries())

      assert.deepStrictEqual(entries, [
        ["foo", "1"],
        ["bar", "2"],
      ])
    })
  })
})
