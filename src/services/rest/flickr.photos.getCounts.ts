/**
 * This file was auto-generated on 2023-10-20T16:36:46.727Z
 * flickr.photos.getCounts
 * Gets a list of photo counts for the given date ranges for the calling user.
 */
export interface FlickrPhotosGetCountsParams {
  /**
   * A comma delimited list of unix timestamps, denoting the periods to return counts for. They should be specified <b>smallest first</b>.
   */
  dates?: string
  /**
   * A comma delimited list of mysql datetimes, denoting the periods to return counts for. They should be specified <b>smallest first</b>.
   */
  taken_dates?: string
}
