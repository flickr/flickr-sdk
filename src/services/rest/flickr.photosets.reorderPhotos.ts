/**
 * This file was auto-generated on 2023-10-24T15:44:49.864Z
 * flickr.photosets.reorderPhotos
 *
 * Permissions required: write
 */
export type FlickrPhotosetsReorderPhotosParams = {
  /**
   * The id of the photoset to reorder. The photoset must belong to the calling user.
   */
  photoset_id: string
  /**
   * Ordered, comma-delimited list of photo ids. Photos that are not in the list will keep their original order
   */
  photo_ids: string
}
