/**
 * flickr.photos.getSizes
 * Returns the available sizes for a photo.  The calling user must have permission to view the photo.
 */
export interface FlickrPhotosGetSizesParams {
  /**
   * The id of the photo to fetch size information for.
   */
  photo_id: string
}
