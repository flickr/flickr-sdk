import { afterEach, describe, it, mock } from "node:test"
import * as assert from "node:assert"
import { FetchTransport, GET, POST } from "flickr-sdk"
import { createServer, type Server, type IncomingMessage } from "node:http"
import { once } from "node:events"

describe("transport/fetch", function () {
  describe("#get", function () {
    it("makes a GET fetch request", async function () {
      const transport = new FetchTransport()

      const fn = mock.method(transport, "fetch", async () => new Response())

      const params = new GET()

      params.set("foo", "bar")

      await transport.get("http://example.com/foo", params)

      assert.strictEqual(fn.mock.callCount(), 1)

      const [url, init] = fn.mock.calls[0].arguments

      assert.ok(url)
      assert.strictEqual(url, "http://example.com/foo?foo=bar")
      assert.ok(init)
      assert.strictEqual(init.method, "GET")
    })

    it("merges init from the constructor", async function () {
      const transport = new FetchTransport({
        headers: {
          cookie: "foo",
        },
      })

      const fn = mock.method(transport, "fetch", async () => new Response())

      await transport.get("http://example.com/foo")

      assert.strictEqual(fn.mock.callCount(), 1)

      const [url, init] = fn.mock.calls[0].arguments

      assert.ok(url)
      assert.ok(init)
      // @ts-ignore
      assert.strictEqual(init.headers.cookie, "foo")
    })
  })

  describe("#post", function () {
    it("makes a POST fetch request", async function () {
      const transport = new FetchTransport()

      const fn = mock.method(transport, "fetch", async () => new Response())

      const params = new POST()

      params.set("foo", "bar")

      await transport.post("http://example.com/foo", params)

      assert.strictEqual(fn.mock.callCount(), 1)

      const [url, init] = fn.mock.calls[0].arguments

      assert.ok(url)
      assert.strictEqual(url, "http://example.com/foo")
      assert.ok(init)
      assert.strictEqual(init.method, "POST")
      assert.ok(init.body instanceof FormData)
      assert.strictEqual(init.body.get("foo"), "bar")
    })

    it("merges init from the constructor", async function () {
      const transport = new FetchTransport({
        headers: {
          cookie: "foo",
        },
      })

      const fn = mock.method(transport, "fetch", async () => new Response())

      await transport.post("http://example.com/foo")

      assert.strictEqual(fn.mock.callCount(), 1)

      const [_, init] = fn.mock.calls[0].arguments

      // @ts-ignore
      assert.strictEqual(init.headers.cookie, "foo")
    })
  })

  describe("#fetch", function () {
    const createTestServer = (statusCode = 200, body = {}) =>
      createServer((req, res) => {
        res.statusCode = statusCode
        res.end(JSON.stringify(body))
      })

    let server: Server | null

    afterEach(function () {
      server?.close()
      server = null
    })

    it("makes a fetch request", async function () {
      server = createTestServer(200)
      server.listen(3000)

      const promise: Promise<any> = once(server, "request")

      const transport = new FetchTransport()

      await transport.fetch("http://localhost:3000/foo", {
        headers: {
          cookie: "foo",
        },
      })

      const [serverRequest] = await promise

      assert.strictEqual(serverRequest.url, "/foo")
      assert.strictEqual(serverRequest.method, "GET")
      assert.strictEqual(serverRequest.headers.cookie, "foo")
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
