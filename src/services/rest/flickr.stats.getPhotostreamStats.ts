/**
 * flickr.stats.getPhotostreamStats
 * Get the number of views on a user's photostream for a given date.
 */
export interface FlickrStatsGetPhotostreamStatsParams {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.
 */
  date: string
}
