/**
 * This file was auto-generated on 2023-10-24T15:44:49.863Z
 * flickr.photosets.removePhotos
 * Remove multiple photos from a photoset.
 * Permissions required: write
 */
export type FlickrPhotosetsRemovePhotosParams = {
  /**
   * The id of the photoset to remove photos from.
   */
  photoset_id: string
  /**
   * Comma-delimited list of photo ids to remove from the photoset.
   */
  photo_ids: string
}
