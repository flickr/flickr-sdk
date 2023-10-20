// @ts-check
import { createFlickr, NullAuth, MockTransport } from "flickr-sdk"
import { describe, it } from "node:test"
import * as assert from "node:assert"

describe("mock transport", function () {
  it("should return a mock response", async function () {
    // mock transport returns whatever mock response you provide it
    const transport = new MockTransport({
      stat: "ok",
    })

    // null auth does nothing
    const auth = new NullAuth()

    const { flickr } = createFlickr(auth, transport)

    // this will not make a network request. instead, you'll get your
    // mock response back
    const res = await flickr("flickr.test.echo", {})

    assert.deepStrictEqual(res, { stat: "ok" })
  })
})
