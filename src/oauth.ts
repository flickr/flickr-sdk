import { createHmac, pseudoRandomBytes } from "node:crypto"
import { stringify } from "node:querystring"

/**
 * A hashmap of characters that also need to be encoded per RFC3986.
 */

const chars: Record<string, string> = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "*": "%2A",
}

/**
 * RegExp pattern that will match any of the keys in `chars` globally.
 */

const regex = new RegExp("[" + Object.keys(chars).join("") + "]", "g")

/**
 * Encodes `str` per RFC3986, which is basically what encodeURIComponent
 * does plus a few extra encoded characters.
 */

function encodeRFC3986(str: string) {
  return encodeURIComponent(str).replace(regex, function (c) {
    return chars[c]
  })
}

/**
 * Returns the HMAC-SHA1 digest of `text` and `key` in base64 encoding.
 * @see https://oauth.net/core/1.0a/#rfc.section.9.2
 */

function hmac(text: string, key: string) {
  return createHmac("sha1", key).update(text).digest("base64")
}

/**
 * Encodes each of the strings in `arr` and joins them with the '&'
 * character (ASCII code 38).
 * @see https://oauth.net/core/1.0a/#rfc.section.9.1.3
 * @see https://oauth.net/core/1.0a/#encoding_parameters
 * @private
 */

function join(arr: string[]) {
  return arr.map(encodeRFC3986).join("&")
}

/**
 * Returns `obj` sorted lexicographically by its keys and stringified.
 */

function sortParams(obj: Record<string, any>) {
  const tmp: Record<string, any> = {}

  Object.keys(obj)
    .sort()
    .forEach(function (key) {
      tmp[key] = obj[key]
    })

  return stringify(tmp, "&", "=", {
    encodeURIComponent: encodeRFC3986,
  })
}

/**
 * Returns a copy of `obj` with all undefined key/value pairs removed.
 */

function cleanParams(obj: Record<string, any>) {
  const tmp: Record<string, any> = {}

  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] !== "undefined") {
      tmp[key] = obj[key]
    }
  })

  return tmp
}

/**
 * @see https://www.flickr.com/services/api/auth.oauth.html
 */

export class OAuth {
  constructor(
    private consumerKey: string,
    private consumerSecret: string,
  ) {
    if (!consumerKey) {
      throw new Error('Missing required argument "consumerKey"')
    }
    if (!consumerSecret) {
      throw new Error('Missing required argument "consumerSecret"')
    }
  }

  /**
   * Returns the number of seconds since January 1, 1970 00:00:00 GMT.
   * @see https://oauth.net/core/1.0a/#nonce
   */

  timestamp() {
    return Math.floor(Date.now() / 1000).toString()
  }

  /**
   * Generates a pseudo-random string. OAuth 1.0 defines a
   * nonce as a value unique within a given timestamp in seconds.
   * @see https://oauth.net/core/1.0a/#nonce
   */
  nonce() {
    return pseudoRandomBytes(32).toString("base64")
  }

  /**
   * The signature method is always HMAC-SHA1.
   * @see https://oauth.net/core/1.0a/#rfc.section.9.2
   */
  readonly signatureMethod = "HMAC-SHA1"

  /**
   * The version is always 1.0.
   */
  readonly version = "1.0"

  /**
   * Creates an object with the standard OAuth 1.0 query params
   * for this instance.
   */
  params() {
    return {
      oauth_nonce: this.nonce(),
      oauth_timestamp: this.timestamp(),
      oauth_consumer_key: this.consumerKey,
      oauth_signature_method: this.signatureMethod,
      oauth_version: this.version,
    }
  }

  /**
   * Calculates the OAuth 1.0 signing key for this consumer secret,
   * optionally supplying `tokenSecret`.
   */
  signingKey(tokenSecret?: string) {
    return join([this.consumerSecret, tokenSecret || ""])
  }

  /**
   * Calculates the OAuth 1.0 base string for `method`, `url` and `params`.
   */

  baseString(method: string, url: string, params: Record<string, any>) {
    return join([method, url, sortParams(cleanParams(params))])
  }

  /**
   * Calculates the OAuth 1.0 signature for `method` and `url`,
   * optionally including `tokenSecret`.
   */

  signature(
    method: string,
    url: string,
    params: Record<string, any>,
    tokenSecret?: string,
  ) {
    return hmac(
      this.baseString(method, url, params),
      this.signingKey(tokenSecret),
    )
  }
}
