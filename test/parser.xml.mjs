// @ts-check
import assert from "node:assert"
import { XMLParser } from "../dist/index.js"
import { describe, it } from "node:test"

describe("XMLParser", function () {
  describe(".parse", function () {
    it("parses an xml response and returns a stat ok", async function () {
      const parser = new XMLParser()

      const res = new Response(
        '<rsp stat="ok"><photoid secret="abcdef" originalsecret="abcdef">1234</photoid></rsp>',
      )

      const { stat, photoid } = await parser.parse(res)
      console.log("OK", stat, photoid)

      assert.strictEqual(stat, "ok")
      assert.strictEqual(photoid.secret, "abcdef")
      assert.strictEqual(photoid.originalsecret, "abcdef")
      assert.strictEqual(photoid._content, "1234")
    })

    it("parses an xml response and returns a stat ok", async function () {
      const parser = new XMLParser()

      const res = new Response(
        `<?xml version="1.0" encoding="utf-8" ?>
<rsp stat="fail">
        <err code="100" msg="Invalid API Key (Key has invalid format)" />
</rsp>`,
      )

      const { stat, err } = await parser.parse(res)

      assert.strictEqual(stat, "fail")
      assert.strictEqual(err.code, "100")
      assert.strictEqual(err.msg, "Invalid API Key (Key has invalid format)")
    })
  })
})
