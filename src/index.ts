import type { API } from "./services/rest/api"
import type { Auth, Transport } from "./types"
import { APIKeyAuth } from "./auth/api_key"
import { OAuthAuth, OAuthConfig } from "./auth/oauth"
import { FlickrService, Flickr } from "./services/rest"
import { OAuthService } from "./services/oauth"
import { Upload, UploadService } from "./services/upload"
import { Replace, ReplaceService } from "./services/replace"
import { FetchTransport } from "./transport/fetch"

interface FlickrServices<T> {
  flickr: Flickr<T>
  upload: Upload
  replace: Replace
}

interface FlickrServicesWithOAuth<T> extends FlickrServices<T> {
  // oauth is only defined if the auth method is oauth
  oauth: OAuthService
}

export function createFlickr<T = API>(
  apiKey: string,
  transport?: Transport,
): FlickrServices<T>

export function createFlickr<T = API>(
  oauthConfig: OAuthConfig,
  transport?: Transport,
): FlickrServicesWithOAuth<T>

export function createFlickr<T = API, A extends Auth = Auth>(
  auth: A,
  transport?: Transport,
): A extends OAuthAuth ? FlickrServicesWithOAuth<T> : FlickrServices<T>

export function createFlickr(
  auth: string | OAuthConfig | Auth,
  transport: Transport = new FetchTransport(),
) {
  if (!auth) {
    throw new Error("Invalid auth config")
  }

  // shorthand for API key auth
  if (typeof auth === "string") {
    return createFlickr(new APIKeyAuth(auth), transport)
  }

  // shorthand for OAuth auth
  if (OAuthAuth.isOAuthConfig(auth)) {
    return createFlickr(
      new OAuthAuth(
        auth.consumerKey,
        auth.consumerSecret,
        auth.oauthToken,
        auth.oauthTokenSecret,
      ),
      transport,
    )
  }

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

  if (auth instanceof OAuthAuth) {
    // OAuth API
    const oauth = new OAuthService(transport, auth)

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
export { API }
// exports for tests
export { OAuth } from "./oauth"
export { Params, GET, POST } from "./params"
export { XMLParser } from "./parser/xml"
export { JSONParser } from "./parser/json"
export { FormParser } from "./parser/form"
export { NullAuth } from "./auth/null"
export { MockTransport } from "./transport/mock"
