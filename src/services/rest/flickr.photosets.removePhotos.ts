/**
 * flickr.photosets.removePhotos
 * Remove multiple photos from a photoset.
 */
export interface FlickrPhotosetsRemovePhotosParams {
  /**
   * The id of the photoset to remove photos from.
   */
  photoset_id: string
  /**
   * Comma-delimited list of photo ids to remove from the photoset.
   */
  photo_ids: string
}
