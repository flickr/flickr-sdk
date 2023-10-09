/**
 * flickr.photos.geo.getLocation
 * Get the geo data (latitude and longitude and the accuracy level) for a photo.
 */
export interface FlickrPhotosGeoGetLocationParams {
  /**
   * The id of the photo you want to retrieve location data for.
   */
  photo_id: string
  /**
   * Extra flags.
   */
  extras?: string
}
