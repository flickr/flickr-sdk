import type { Auth, Transport } from "../types"
import { GET } from "../params"
import { FormParser } from "../parser/form"

export class OAuthService {
  constructor(
    private transport: Transport,
    private auth: Auth,
  ) {}

  async request(callbackUrl: string) {
    const req = new Request(
      "https://www.flickr.com/services/oauth/request_token",
      {
        method: "GET",
      },
    )

    const params = new GET()

    params.set("oauth_callback", callbackUrl)

    await this.auth.sign(req, params)

    const res = await this.transport.get(req.url, params)
    const parser = new FormParser()

    return parser.parse(res)
  }

  async verify(oauthVerifier: string) {
    const req = new Request(
      "https://www.flickr.com/services/oauth/access_token",
      {
        method: "GET",
      },
    )

    const params = new GET()

    params.set("oauth_verifier", oauthVerifier)

    await this.auth.sign(req, params)

    const res = await this.transport.get(req.url, params)
    const parser = new FormParser()

    return parser.parse(res)
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
