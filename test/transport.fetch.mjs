// @ts-check
import { afterEach, describe, it } from "node:test"
import * as assert from "node:assert"
import { FetchTransport } from "flickr-sdk"
import { createServer } from "node:http"
import { once } from "node:events"

describe("transport/fetch", function () {
  const createTestServer = (statusCode = 200, body = {}) =>
    createServer((req, res) => {
      res.statusCode = statusCode
      res.end(JSON.stringify(body))
    })

  let server

  afterEach(function () {
    server?.close()
    server = null
  })

  describe("#get", function () {
    it("makes a fetch request", async function () {
      server = createTestServer(200)
      server.listen(3000)

      const promise = once(server, "request")

      const transport = new FetchTransport()

      await transport.get("http://localhost:3000/foo")

      const [serverRequest] = await promise

      assert.strictEqual(serverRequest.url, "/foo")
      assert.strictEqual(serverRequest.method, "GET")
    })

    it("throws on an http error", async function () {
      server = createTestServer(500)
      server.listen(3001)

      const transport = new FetchTransport()

      await assert.rejects(() => transport.get("http://localhost:3001/foo"), {
        name: "Error",
        message: "Internal Server Error",
      })
    })
  })
})
