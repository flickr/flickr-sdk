/**
 * This file was auto-generated on 2023-10-24T15:44:49.902Z
 * flickr.stats.getPhotosetStats
 * Get the number of views on a photoset for a given date.
 * Permissions required: read
 */
export type FlickrStatsGetPhotosetStatsParams = {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.
 */
  date: string
  /**
   * The id of the photoset to get stats for.
   */
  photoset_id: string
}
