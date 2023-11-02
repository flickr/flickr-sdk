import type { Auth, Transport } from "../types"
import { GET } from "../params"
import { FormParser } from "../parser/form"

export class OAuthService {
  constructor(
    private transport: Transport,
    private auth: Auth,
  ) {}

  async request(callbackUrl: string) {
    const url = "https://www.flickr.com/services/oauth/request_token"

    const params = new GET()

    params.set("oauth_callback", callbackUrl)

    await this.auth.sign("GET", url, params)

    const res = await this.transport.get(url, params)
    const parser = new FormParser()

    const { oauth_token, oauth_token_secret } = await parser.parse(res)

    return {
      requestToken: oauth_token,
      requestTokenSecret: oauth_token_secret,
    }
  }

  async verify(oauthVerifier: string) {
    const url = "https://www.flickr.com/services/oauth/access_token"

    const params = new GET()

    params.set("oauth_verifier", oauthVerifier)

    await this.auth.sign("GET", url, params)

    const res = await this.transport.get(url, params)
    const parser = new FormParser()

    const { user_nsid, oauth_token, oauth_token_secret } =
      await parser.parse(res)

    return {
      nsid: user_nsid,
      oauthToken: oauth_token,
      oauthTokenSecret: oauth_token_secret,
    }
  }

  // this should return a string ready to be dropped into a location header
  authorizeUrl(
    requestToken: string,
    perms: "read" | "write" | "delete" = "read",
  ) {
    switch (perms) {
      case "read":
      case "write":
      case "delete":
        const url = new URL("https://www.flickr.com/services/oauth/authorize")
        url.searchParams.set("perms", perms)
        url.searchParams.set("oauth_token", requestToken)
        return url.href
      default:
        throw new Error('Unknown oauth perms "' + perms + '"')
    }
  }
}
