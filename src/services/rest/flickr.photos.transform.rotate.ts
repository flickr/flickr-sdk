/**
 * flickr.photos.transform.rotate
 * Rotate a photo.
 */
export interface FlickrPhotosTransformRotateParams {
  /**
   * The id of the photo to rotate.
   */
  photo_id: string
  /**
   * The amount of degrees by which to rotate the photo (clockwise) from it's current orientation. Valid values are 90, 180 and 270.
   */
  degrees: string
}
