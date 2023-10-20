/**
 * This file was auto-generated on 2023-10-20T16:36:46.799Z
 * flickr.stats.getPopularPhotos
 * List the photos with the most views, comments or favorites
 */
export interface FlickrStatsGetPopularPhotosParams {
  /**
 * Stats will be returned for this date. This should be in either be in YYYY-MM-DD or unix timestamp format.

A day according to Flickr Stats starts at midnight GMT for all users, and timestamps will automatically be rounded down to the start of the day.

If no date is provided, all time view counts will be returned.
 */
  date?: string
  /**
 * The order in which to sort returned photos. Defaults to views. The possible values are views, comments and favorites.

Other sort options are available through <a href="/services/api/flickr.photos.search.html">flickr.photos.search</a>.
 */
  sort?: string
  /**
   * Number of referrers to return per page. If this argument is omitted, it defaults to 25. The maximum allowed value is 100.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
