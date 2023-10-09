/**
 * flickr.photos.geo.correctLocation
 *
 */
export interface FlickrPhotosGeoCorrectLocationParams {
  /**
   * The ID of the photo whose WOE location is being corrected.
   */
  photo_id: string
  /**
   * A Flickr Places ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  place_id?: string
  /**
   * A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  woe_id?: string
  /**
   * The venue ID for a Foursquare location. (If not passed in with correction, any existing foursquare venue will be removed).
   */
  foursquare_id: string
}
