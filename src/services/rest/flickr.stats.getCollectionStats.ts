/**
 * flickr.stats.getCollectionStats
 * Get the number of views on a collection for a given date.
 */
export interface FlickrStatsGetCollectionStatsParams {
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
