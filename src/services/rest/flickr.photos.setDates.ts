/**
 * This file was auto-generated on 2023-10-24T15:44:49.838Z
 * flickr.photos.setDates
 * Set one or both of the dates for a photo.
 * Permissions required: write
 */
export type FlickrPhotosSetDatesParams = {
  /**
   * The id of the photo to edit dates for.
   */
  photo_id: string
  /**
   * The date the photo was uploaded to flickr (see the <a href="/services/api/misc.dates.html">dates documentation</a>)
   */
  date_posted?: string
  /**
   * The date the photo was taken (see the <a href="/services/api/misc.dates.html">dates documentation</a>)
   */
  date_taken?: string
  /**
   * The granularity of the date the photo was taken (see the <a href="/services/api/misc.dates.html">dates documentation</a>)
   */
  date_taken_granularity?: string
}
