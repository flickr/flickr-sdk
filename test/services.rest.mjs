// @ts-check
import { describe, it, mock } from "node:test"
import * as assert from "node:assert"
import { FlickrService, MockTransport, NullAuth } from "flickr-sdk"

describe("FlickrService", function () {
  describe(".request", function () {
    it("makes an API call", async function () {
      const transport = new MockTransport({
        stat: "ok",
      })

      const auth = new NullAuth()

      const service = new FlickrService(transport, auth)

      const res = await service.call("flickr.test.echo", { foo: "bar" })

      assert.strictEqual(res.stat, "ok")
    })

    it("throws on a Flickr error", async function () {
      const transport = new MockTransport({
        stat: "fail",
        message: "Invalid API Key (Key has invalid format)",
      })

      const auth = new NullAuth()

      const service = new FlickrService(transport, auth)

      await assert.rejects(
        () => service.call("flickr.test.echo", { foo: "bar" }),
        {
          name: "Error",
          message: "Invalid API Key (Key has invalid format)",
        },
      )
    })

    it("makes a GET request for a read method", async function () {
      const auth = new NullAuth()

      const transport = new MockTransport({
        stat: "ok",
      })

      const get = mock.method(transport, "get")

      const service = new FlickrService(transport, auth)
      await service.call("flickr.test.echo", { foo: "bar" })

      assert.strictEqual(get.mock.callCount(), 1)
    })

    it("makes a POST request for a write method", async function () {
      const auth = new NullAuth()

      const transport = new MockTransport({
        stat: "ok",
      })

      const post = mock.method(transport, "post")

      const service = new FlickrService(transport, auth)
      await service.call("flickr.photosets.editPhotos", { foo: "bar" })

      assert.strictEqual(post.mock.callCount(), 1)
    })

    it("makes a POST request for a delete method", async function () {
      const auth = new NullAuth()
      const transport = new MockTransport({
        stat: "ok",
      })

      const post = mock.method(transport, "post")

      const service = new FlickrService(transport, auth)
      await service.call("flickr.photosets.delete", { foo: "bar" })

      assert.strictEqual(post.mock.callCount(), 1)
    })
  })
})
