/**
 * flickr.photosets.removePhoto
 * Remove a photo from a photoset.
 */
export interface FlickrPhotosetsRemovePhotoParams {
  /**
   * The id of the photoset to remove a photo from.
   */
  photoset_id: string
  /**
   * The id of the photo to remove from the set.
   */
  photo_id: string
}
