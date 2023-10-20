import type { Auth } from "../types"
import { OAuth } from "../oauth"
import { Params } from "../params"

export interface OAuthConfig {
  consumerKey: string
  consumerSecret: string
  oauthToken: string | false
  oauthTokenSecret: string | false
}

export interface OAuthAuthParams {
  oauth_nonce: string
  oauth_timestamp: string
  oauth_consumer_key: string
  oauth_signature_method: string
  oauth_version: string
}

export class OAuthAuth implements Auth {
  private oauth: OAuth

  constructor(
    consumerKey: string,
    consumerSecret: string,
    private oauthToken: string | false,
    private oauthTokenSecret: string | false,
  ) {
    this.oauth = new OAuth(consumerKey, consumerSecret)

    if (typeof oauthToken !== "string" && oauthToken !== false) {
      throw new Error('Missing required argument "oauthToken"')
    }
    if (typeof oauthTokenSecret !== "string" && oauthTokenSecret !== false) {
      throw new Error('Missing required argument "oauthTokenSecret"')
    }
    if (
      typeof oauthToken === "string" &&
      typeof oauthTokenSecret !== "string"
    ) {
      throw new Error(
        'if "oauthToken" is specified, "oauthTokenSecret" must also be specified',
      )
    }
  }

  async sign(req: Request, params: Params): Promise<void> {
    // oauth required params
    for (const [key, value] of Object.entries(this.oauth.params())) {
      params.set(key, value)
    }

    // add the oauth token unless explicitly omitted
    if (this.oauthToken !== false) {
      params.set("oauth_token", this.oauthToken)
    }

    // finally, the oauth signature with all of the above
    params.set(
      "oauth_signature",
      this.signature(req.method, req.url, Object.fromEntries(params.entries())),
    )
  }

  signature(
    method: string,
    url: string,
    params: Record<string, string>,
  ): string {
    return this.oauthTokenSecret === false
      ? this.oauth.signature(method, url, params)
      : this.oauth.signature(method, url, params, this.oauthTokenSecret)
  }

  static isOAuthConfig(config: any): config is OAuthConfig {
    return (
      typeof config === "object" &&
      typeof config.consumerKey === "string" &&
      typeof config.consumerSecret === "string" &&
      (typeof config.oauthToken === "string" || config.oauthToken === false) &&
      (typeof config.oauthTokenSecret === "string" ||
        config.oauthTokenSecret === false)
    )
  }
}
