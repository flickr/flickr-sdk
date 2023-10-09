/**
 * flickr.photosets.addPhoto
 * Add a photo to the end of an existing photoset.
 */
export interface FlickrPhotosetsAddPhotoParams {
  /**
   * The id of the photoset to add a photo to.
   */
  photoset_id: string
  /**
   * The id of the photo to add to the set.
   */
  photo_id: string
}
