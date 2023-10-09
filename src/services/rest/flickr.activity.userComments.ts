/**
 * flickr.activity.userComments
 * Returns a list of recent activity on photos commented on by the calling user. <b>Do not poll this method more than once an hour</b>.
 */
export interface FlickrActivityUserCommentsParams {
  /**
   * Number of items to return per page. If this argument is omitted, it defaults to 10. The maximum allowed value is 50.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
