import { describe, it } from "@jest/globals"
import * as assert from "node:assert"
import { ReplaceService, NullAuth, MockTransport } from "flickr-sdk"

describe("ReplaceService", function () {
  describe(".replace", function () {
    it("replaces a photo", async function () {
      const transport = new MockTransport(
        `<?xml version="1.0" encoding="utf-8" ?>
<rsp stat="ok">
        <photoid secret="abcdef" originalsecret="abcdef">1234</photoid>
</rsp>`,
      )

      const auth = new NullAuth()

      const service = new ReplaceService(transport, auth)

      const file = new Blob([])

      const res = await service.replace("1234", file)

      assert.strictEqual(res.id, "1234")
      assert.strictEqual(res.secret, "abcdef")
      assert.strictEqual(res.originalsecret, "abcdef")
    })

    it("throws on a Flickr error", async function () {
      const transport = new MockTransport(
        `<?xml version="1.0" encoding="utf-8" ?>
<rsp stat="fail">
        <err code="100" msg="Invalid API Key (Key has invalid format)" />
</rsp>`,
      )

      const auth = new NullAuth()

      const service = new ReplaceService(transport, auth)

      const file = new Blob([])

      await assert.rejects(() => service.replace("1234", file), {
        name: "Error",
        message: "Invalid API Key (Key has invalid format)",
      })
    })
  })
})
