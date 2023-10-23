/**
 * This file was auto-generated on 2023-10-24T15:44:49.899Z
 * flickr.stats.getPhotoReferrers
 * Get a list of referrers from a given domain to a photo
 * Permissions required: read
 */
export type FlickrStatsGetPhotoReferrersParams = {
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
   * The id of the photo to get stats for. If not provided, stats for all photos will be returned.
   */
  photo_id?: string
  /**
   * Number of referrers to return per page. If this argument is omitted, it defaults to 25. The maximum allowed value is 100.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
