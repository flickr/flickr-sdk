// @ts-check
import { describe, it } from "node:test"
import { ReplaceService } from "../dist/index.js"
import assert from "node:assert"

class MockTransport {
  constructor(response) {
    this.response = response
  }

  async get() {
    return new Response(this.response)
  }

  async post() {
    return new Response(this.response)
  }
}

class MockAuth {
  async sign() {}
}

describe("ReplaceService", function () {
  describe(".replace", function () {
    it("replaces a photo", async function () {
      const transport = new MockTransport(
        `<?xml version="1.0" encoding="utf-8" ?>
<rsp stat="ok">
        <photoid secret="abcdef" originalsecret="abcdef">1234</photoid>
</rsp>`,
      )

      const auth = new MockAuth()

      const service = new ReplaceService(transport, auth)

      const file = new File([], "test.jpg")

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

      const auth = new MockAuth()

      const service = new ReplaceService(transport, auth)

      const file = new File([], "test.jpg")

      await assert.rejects(() => service.replace("1234", file), {
        name: "Error",
        message: "Invalid API Key (Key has invalid format)",
      })
    })
  })
})
