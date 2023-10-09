// @ts-check
import { OAuth } from "../dist/index.js"
import * as assert from "node:assert"
import { describe, it, beforeEach, mock } from "node:test"

describe("OAuth", function () {
  let oauth

  beforeEach(function () {
    oauth = new OAuth("consumer key", "consumer secret")
    mock.method(oauth, "timestamp", () => "499166400")

    mock.method(
      oauth,
      "nonce",
      () => "p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=",
    )
  })

  it('requires "consumerKey" and "consumerSecret"', function () {
    assert.throws(
      function () {
        // @ts-expect-error
        oauth = new OAuth()
      },
      {
        name: "Error",
        message: 'Missing required argument "consumerKey"',
      },
    )

    assert.throws(
      function () {
        // @ts-expect-error
        oauth = new OAuth("abc")
      },
      {
        name: "Error",
        message: 'Missing required argument "consumerSecret"',
      },
    )

    assert.doesNotThrow(function () {
      oauth = new OAuth("abc", "def")
    })
  })

  describe("#timestamp", function () {
    beforeEach(function () {
      mock.restoreAll()
    })

    it("returns the current system time in seconds", function () {
      assert.equal(oauth.timestamp(), Math.floor(Date.now() / 1000))
    })
  })

  describe("#nonce", function () {
    beforeEach(function () {
      mock.restoreAll()
    })

    it("returns a string", function () {
      assert.equal(typeof oauth.nonce(), "string")
    })

    it("returns 32 bytes of data", function () {
      assert.equal(Buffer.byteLength(oauth.nonce(), "base64"), 32)
    })

    it("does not return the same nonce twice", function () {
      assert.notEqual(oauth.nonce(), oauth.nonce())
    })
  })

  describe("#signatureMethod", function () {
    it("is HMAC-SHA1", function () {
      assert.equal(oauth.signatureMethod, "HMAC-SHA1")
    })
  })

  describe("#version", function () {
    it("is 1.0", function () {
      assert.equal(oauth.version, "1.0")
    })
  })

  describe("#tokenSecret", function () {
    it("creates the correct string without a token secret", function () {
      assert.equal(oauth.signingKey(), "consumer%20secret&")
    })

    it("creates the correct string with a token secret", function () {
      assert.equal(
        oauth.signingKey("keyboard cat"),
        "consumer%20secret&keyboard%20cat",
      )
    })
  })

  describe("#baseString", function () {
    it("creates the correct base string for the method, url and params", function () {
      assert.equal(
        oauth.baseString("GET", "http://www.example.com", {
          foo: "123",
          bar: "456",
        }),
        "GET&http%3A%2F%2Fwww.example.com&bar%3D456%26foo%3D123",
      )
    })

    it("encodes params following RFC3986", function () {
      assert.equal(
        oauth.baseString("GET", "http://www.example.com", {
          foo: "!'()*",
        }),
        // params get double-encoded, once when stringifying the
        // query string and again when encoded into the base string
        "GET&http%3A%2F%2Fwww.example.com&foo%3D%2521%2527%2528%2529%252A",
      )
    })

    it("cleans undefined params", function () {
      assert.equal(
        oauth.baseString("GET", "http://www.example.com", {
          foo: "123",
          bar: undefined, // should be removed
        }),
        "GET&http%3A%2F%2Fwww.example.com&foo%3D123",
      )
    })
  })

  describe("#signature", function () {
    it("returns the signature without a token secret", function () {
      var signature = oauth.signature("GET", "http://www.example.com", {
        foo: "123",
        bar: "456",
      })

      assert.equal(signature, "lNBTzyWRRHBuoXmgK13Nht5oiKs=")
    })

    it("returns the signature with a token secret", function () {
      var signature = oauth.signature(
        "GET",
        "http://www.example.com",
        { foo: "123", bar: "456" },
        "keyboard cat",
      )

      assert.equal(signature, "pytjoWTzMmvq13/Bai9YVX1tV9c=")
    })
  })
})
