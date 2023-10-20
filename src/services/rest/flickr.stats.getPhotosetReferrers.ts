/**
 * This file was auto-generated on 2023-10-20T16:36:46.796Z
 * flickr.stats.getPhotosetReferrers
 * Get a list of referrers from a given domain to a photoset
 */
export interface FlickrStatsGetPhotosetReferrersParams {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.
 */
  date: string
  /**
   * The domain to return referrers for. This should be a hostname (eg: "flickr.com") with no protocol or pathname.
   */
  domain: string
  /**
   * The id of the photoset to get stats for. If not provided, stats for all sets will be returned.
   */
  photoset_id?: string
  /**
   * Number of referrers to return per page. If this argument is omitted, it defaults to 25. The maximum allowed value is 100.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
