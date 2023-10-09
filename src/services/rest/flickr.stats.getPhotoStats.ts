/**
 * flickr.stats.getPhotoStats
 * Get the number of views, comments and favorites on a photo for a given date.
 */
export interface FlickrStatsGetPhotoStatsParams {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.
 */
  date: string
  /**
   * The id of the photo to get stats for.
   */
  photo_id: string
}
