/**
 * This file was auto-generated on 2023-10-20T16:36:46.647Z
 * flickr.auth.getToken
 * Returns the auth token for the given frob, if one has been attached. <b>This method call must be signed</b>, and is <b><a href="/services/api/auth.oauth.html">deprecated in favour of OAuth</a></b>.
 */
export interface FlickrAuthGetTokenParams {
  /**
   * The frob to check.
   */
  frob: string
}
