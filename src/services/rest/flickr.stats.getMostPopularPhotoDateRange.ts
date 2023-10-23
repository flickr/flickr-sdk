/**
 * This file was auto-generated on 2023-10-24T15:44:49.897Z
 * flickr.stats.getMostPopularPhotoDateRange
 * Get the most popular photo for each day given a day range
 * Permissions required: read
 */
export type FlickrStatsGetMostPopularPhotoDateRangeParams = {
  /**
   * The date until which the data should be fetched from, in the YYYY-MM-DD format
   */
  date_until: string
  /**
   * The number of days to go back from the date_until param
   */
  num_days: string
  /**
   * What type of stats to grab (views, favorites, or comments)
   */
  sort?: string
}
