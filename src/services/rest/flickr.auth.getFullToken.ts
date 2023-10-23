/**
 * This file was auto-generated on 2023-10-24T15:44:49.671Z
 * flickr.auth.getFullToken
 * Get the full authentication token for a mini-token. <b>This method call must be signed</b>, and is <b><a href="/services/api/auth.oauth.html">deprecated in favour of OAuth</a></b>.
 * Permissions required: none
 */
export type FlickrAuthGetFullTokenParams = {
  /**
   * The mini-token typed in by a user. It should be 9 digits long. It may optionally contain dashes.
   */
  mini_token: string
}
