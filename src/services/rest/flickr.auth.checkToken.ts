/**
 * flickr.auth.checkToken
 * Returns the credentials attached to an authentication token. This call <b>must</b> be signed, and is <b><a href="/services/api/auth.oauth.html">deprecated in favour of OAuth</a></b>.
 */
export interface FlickrAuthCheckTokenParams {
  /**
   * The authentication token to check.
   */
  auth_token: string
}
