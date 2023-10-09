/**
 * flickr.auth.getFullToken
 * Get the full authentication token for a mini-token. <b>This method call must be signed</b>, and is <b><a href="/services/api/auth.oauth.html">deprecated in favour of OAuth</a></b>.
 */
export interface FlickrAuthGetFullTokenParams {
  /**
   * The mini-token typed in by a user. It should be 9 digits long. It may optionally contain dashes.
   */
  mini_token: string
}
