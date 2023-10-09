import type { Auth, Transport } from "./types"
import { APIKeyAuth } from "./auth/api_key"
import { OAuthAuth } from "./auth/oauth"
import { FlickrService, Flickr } from "./services/rest"
import { OAuthService } from "./services/oauth"
import { Upload, UploadService } from "./services/upload"
import { Replace, ReplaceService } from "./services/replace"
import { FetchTransport } from "./transport/fetch"

/**
 * Create a new Flickr client.
 */
export function createFlickr(apiKey: string): {
  flickr: Flickr
  upload: Upload
  replace: Replace
}
export function createFlickr(config: OAuthConfig): {
  flickr: Flickr
  upload: Upload
  replace: Replace
  // oauth is only defined if the auth method is oauth
  oauth: OAuthService
}
export function createFlickr(config: string | OAuthConfig) {
  const auth = detemineAuth(config)
  const transport = determineTransport()

  // REST API
  const flickr: Flickr = async (method, params) => {
    const service = new FlickrService(transport, auth)
    return service.call(method, params as Record<string, string>)
  }

  // Upload API
  const upload: Upload = async (file, params) => {
    const service = new UploadService(transport, auth)
    return service.upload(file, params as Record<string, string>)
  }

  // Replace API
  const replace: Replace = async (id, file) => {
    const service = new ReplaceService(transport, auth)
    return service.replace(id, file)
  }

  // OAuth API
  const oauth = new OAuthService(transport, auth)

  // TODO Feeds API

  if (auth instanceof OAuthAuth) {
    return {
      flickr,
      upload,
      replace,
      // oauth is only defined if the auth method is oauth
      oauth,
    }
  } else {
    return { flickr, upload, replace }
  }
}

export interface OAuthConfig {
  consumerKey: string
  consumerSecret: string
  oauthToken: string | false
  oauthTokenSecret: string | false
}

function detemineAuth(config: string | OAuthConfig): Auth {
  switch (typeof config) {
    case "string":
      return new APIKeyAuth(config)
    case "object":
      const { consumerKey, consumerSecret, oauthToken, oauthTokenSecret } =
        config
      return new OAuthAuth(
        consumerKey,
        consumerSecret,
        oauthToken,
        oauthTokenSecret,
      )
    default:
      throw new Error("Invalid auth config")
  }
}

function determineTransport(): Transport {
  return new FetchTransport()
}

export type { Flickr, Auth, Transport }
export {
  FlickrService,
  UploadService,
  ReplaceService,
  FetchTransport,
  APIKeyAuth,
  OAuthAuth,
  OAuthService,
}
// exports for tests
export { OAuth } from "./oauth"
export { Params, GET, POST } from "./params"
export { XMLParser } from "./parser/xml"
export { JSONParser } from "./parser/json"
export { FormParser } from "./parser/form"
