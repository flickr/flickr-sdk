/**
 * flickr.photos.getExif
 * Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.
 */
export interface FlickrPhotosGetExifParams {
  /**
   * The id of the photo to fetch information for.
   */
  photo_id: string
  /**
   * The secret for the photo. If the correct secret is passed then permissions checking is skipped. This enables the 'sharing' of individual photos by passing around the id and secret.
   */
  secret?: string
}
