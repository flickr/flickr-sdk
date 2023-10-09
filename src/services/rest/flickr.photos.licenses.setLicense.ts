/**
 * flickr.photos.licenses.setLicense
 * Sets the license for a photo.
 */
export interface FlickrPhotosLicensesSetLicenseParams {
  /**
   * The photo to update the license for.
   */
  photo_id: string
  /**
   * The license to apply, or 0 (zero) to remove the current license. Note : as of this writing the "no known copyright restrictions" license (7) is not a valid argument.
   */
  license_id: string
}
