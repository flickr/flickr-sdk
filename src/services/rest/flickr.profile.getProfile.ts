/**
 * flickr.profile.getProfile
 * Returns specified user's profile info, respecting profile privacy settings
 */
export interface FlickrProfileGetProfileParams {
  /**
   * The NSID of the user to fetch profile information for.
   */
  user_id: string
}
