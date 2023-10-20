/**
 * This file was auto-generated on 2023-10-20T16:36:46.641Z
 * flickr.activity.userPhotos
 * Returns a list of recent activity on photos belonging to the calling user. <b>Do not poll this method more than once an hour</b>.
 */
export interface FlickrActivityUserPhotosParams {
  /**
   * The timeframe in which to return updates for. This can be specified in days (<code>'2d'</code>) or hours (<code>'4h'</code>). The default behavoir is to return changes since the beginning of the previous user session.
   */
  timeframe?: string
  /**
   * Number of items to return per page. If this argument is omitted, it defaults to 10. The maximum allowed value is 50.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
