import { describe, it } from "node:test"
import * as assert from "node:assert"
import { MockTransport, NullAuth, UploadService } from "flickr-sdk"

describe("UploadService", function () {
  describe(".upload", function () {
    it("uploads a photo", async function () {
      const transport = new MockTransport(
        `<?xml version="1.0" encoding="utf-8" ?>
<rsp stat="ok">
        <photoid secret="abcdef" originalsecret="abcdef">1234</photoid>
</rsp>`,
      )

      const auth = new NullAuth()

      const service = new UploadService(transport, auth)

      const file = new Blob([])

      const res = await service.upload(file, {
        title: "test",
      })

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

      const service = new UploadService(transport, auth)

      const file = new Blob(["big ol jpeg"])

      await assert.rejects(() => service.upload(file), {
        name: "Error",
        message: "Invalid API Key (Key has invalid format)",
      })
    })
  })
})
