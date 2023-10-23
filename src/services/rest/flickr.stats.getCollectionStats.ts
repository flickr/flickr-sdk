/**
 * This file was auto-generated on 2023-10-24T15:44:49.896Z
 * flickr.stats.getCollectionStats
 * Get the number of views on a collection for a given date.
 * Permissions required: read
 */
export type FlickrStatsGetCollectionStatsParams = {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.
 */
  date: string
  /**
   * The id of the collection to get stats for.
   */
  collection_id: string
}
