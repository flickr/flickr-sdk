/**
 * This file was auto-generated on 2023-10-24T15:44:49.903Z
 * flickr.stats.getPhotoStats
 * Get the number of views, comments and favorites on a photo for a given date.
 * Permissions required: read
 */
export type FlickrStatsGetPhotoStatsParams = {
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
