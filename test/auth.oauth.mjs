// @ts-check
import { describe, it, mock } from "node:test"
import * as assert from "node:assert"
import { OAuthAuth } from "flickr-sdk"

describe("auth/oauth", function () {
  it("validates arguments", function () {
    assert.throws(
      function () {
        // @ts-expect-error
        new OAuthAuth()
      },
      {
        message: 'Missing required argument "consumerKey"',
      },
    )

    assert.throws(
      function () {
        // @ts-expect-error
        new OAuthAuth("consumer key")
      },
      {
        message: 'Missing required argument "consumerSecret"',
      },
    )

    assert.throws(
      function () {
        // @ts-expect-error
        new OAuthAuth("consumer key", "consumer secret")
      },
      {
        message: 'Missing required argument "oauthToken"',
      },
    )

    assert.throws(
      function () {
        // @ts-expect-error
        new OAuthAuth("consumer key", "consumer secret", "oauth token")
      },
      {
        message: 'Missing required argument "oauthTokenSecret"',
      },
    )

    assert.throws(
      function () {
        new OAuthAuth("consumer key", "consumer secret", "oauth token", false)
      },
      {
        message:
          'if "oauthToken" is specified, "oauthTokenSecret" must also be specified',
      },
    )

    assert.doesNotThrow(function () {
      new OAuthAuth(
        "consumer key",
        "consumer secret",
        "oauth token",
        "oauth token secret",
      )
    })

    assert.doesNotThrow(function () {
      new OAuthAuth("consumer key", "consumer secret", false, false)
    })
  })

  describe("#sign", function () {
    it("signs a request using OAuth 1.0", async function () {
      const auth = new OAuthAuth(
        "consumer key",
        "consumer secret",
        "oauth token",
        "oauth token secret",
      )

      mock.method(
        // @ts-expect-error
        auth.oauth,
        "timestamp",
        () => "499166400",
      )
      mock.method(
        // @ts-expect-error
        auth.oauth,
        "nonce",
        () => "p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=",
      )

      const req = new Request("https://api.flickr.com/services/rest", {
        method: "GET",
      })

      const params = new Map()

      params.set("method", "flickr.test.echo")
      params.set("foo", "bar")

      await auth.sign(req, params)

      assert.strictEqual(
        params.get("oauth_nonce"),
        "p2m2bnHdXVIsQH0FUv0oN9XrJU57ak7dSSpHU36mn4k=",
      )
      assert.strictEqual(params.get("oauth_consumer_key"), "consumer key")
      assert.strictEqual(params.get("oauth_token"), "oauth token")
      assert.strictEqual(params.get("oauth_version"), "1.0")
      assert.strictEqual(params.get("oauth_timestamp"), "499166400")
      assert.strictEqual(params.get("oauth_signature_method"), "HMAC-SHA1")
      assert.strictEqual(
        params.get("oauth_signature"),
        "Dz9rJCs/jKRPMeLztpj7T9Ur9m0=",
      )
      assert.strictEqual(params.get("method"), "flickr.test.echo")
      assert.strictEqual(params.get("foo"), "bar")
    })
  })
})
