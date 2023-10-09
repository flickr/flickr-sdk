import { describe, it } from "node:test"
import { FlickrService } from "../dist/index.js"
import assert from "node:assert"

class MockTransport {
  constructor(response) {
    this.response = response
  }

  get(url, params) {
    return new Response(JSON.stringify(this.response))
  }
}

class MockAuth {
  sign(req, params) {}
}

describe("FlickrService", function () {
  describe(".request", function () {
    it("makes an API call", async function () {
      const transport = new MockTransport({
        stat: "ok",
      })

      const auth = new MockAuth()

      const service = new FlickrService(transport, auth)

      const res = await service.call("flickr.test.echo", { foo: "bar" })

      assert.strictEqual(res.stat, "ok")
    })

    it("throws on a Flickr error", async function () {
      const transport = new MockTransport({
        stat: "fail",
        message: "Invalid API Key (Key has invalid format)",
      })

      const auth = new MockAuth()

      const service = new FlickrService(transport, auth)

      await assert.rejects(
        () => service.call("flickr.test.echo", { foo: "bar" }),
        {
          name: "Error",
          message: "Invalid API Key (Key has invalid format)",
        },
      )
    })
  })
})
