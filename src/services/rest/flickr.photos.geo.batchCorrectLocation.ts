/**
 * This file was auto-generated on 2023-10-24T15:44:49.786Z
 * flickr.photos.geo.batchCorrectLocation
 * Correct the places hierarchy for all the photos for a user at a given latitude, longitude and accuracy.<br /><br />

Batch corrections are processed in a delayed queue so it may take a few minutes before the changes are reflected in a user's photos.
 * Permissions required: write
 */
export type FlickrPhotosGeoBatchCorrectLocationParams = {
  /**
   * The latitude of the photos to be update whose valid range is -90 to 90. Anything more than 6 decimal places will be truncated.
   */
  lat: string
  /**
   * The longitude of the photos to be updated whose valid range is -180 to 180. Anything more than 6 decimal places will be truncated.
   */
  lon: string
  /**
   * Recorded accuracy level of the photos to be updated. World level is 1, Country is ~3, Region ~6, City ~11, Street ~16. Current range is 1-16. Defaults to 16 if not specified.
   */
  accuracy: string
  /**
   * A Flickr Places ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  place_id?: string
  /**
   * A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  woe_id?: string
}
