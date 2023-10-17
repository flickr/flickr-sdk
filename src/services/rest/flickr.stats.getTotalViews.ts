/**
 * flickr.stats.getTotalViews
 * Get the overall view counts for an account
 */
export interface FlickrStatsGetTotalViewsParams {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.

If no date is provided, all time view counts will be returned.
 */
  date?: string
}
