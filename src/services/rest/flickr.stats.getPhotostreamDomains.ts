/**
 * flickr.stats.getPhotostreamDomains
 * Get a list of referring domains for a photostream
 */
export interface FlickrStatsGetPhotostreamDomainsParams {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.
 */
  date: string
  /**
   * Number of domains to return per page. If this argument is omitted, it defaults to 25. The maximum allowed value is 100
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
