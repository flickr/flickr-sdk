import { describe, it } from "@jest/globals"
import { MockTransport, NullAuth, OAuthService } from "flickr-sdk"
import * as assert from "node:assert"

describe("OAuthService", function () {
  describe("#request", function () {
    it("resolves with the request token and secret", async function () {
      const transport = new MockTransport(
        "oauth_token=1234&oauth_token_secret=5678",
      )

      const auth = new NullAuth()

      const service = new OAuthService(transport, auth)

      const { requestToken, requestTokenSecret } = await service.request(
        "https://example.com/oauth/callback",
      )

      assert.strictEqual(requestToken, "1234")
      assert.strictEqual(requestTokenSecret, "5678")
    })
  })

  describe("#verify", function () {
    it("resolves with the access token, secret, and user nsid", async function () {
      const transport = new MockTransport(
        "user_nsid=1234@N01&oauth_token=1234&oauth_token_secret=5678&fullname=Jamal%20Fanaian&username=jamalfanaian",
      )

      const auth = new NullAuth()

      const service = new OAuthService(transport, auth)

      const { nsid, oauthToken, oauthTokenSecret, fullname, username } =
        await service.verify("1234")

      assert.strictEqual(nsid, "1234@N01")
      assert.strictEqual(oauthToken, "1234")
      assert.strictEqual(oauthTokenSecret, "5678")
      assert.strictEqual(fullname, "Jamal Fanaian")
      assert.strictEqual(username, "jamalfanaian")
    })
  })
})
