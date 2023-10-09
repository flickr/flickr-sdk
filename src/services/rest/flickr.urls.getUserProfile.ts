/**
 * flickr.urls.getUserProfile
 * Returns the url to a user's profile.
 */
export interface FlickrUrlsGetUserProfileParams {
  /**
   * The NSID of the user to fetch the url for. If omitted, the calling user is assumed.
   */
  user_id?: string
}
