/**
 * This file was auto-generated on 2023-10-20T16:36:46.776Z
 * flickr.photosets.reorderPhotos
 *
 */
export interface FlickrPhotosetsReorderPhotosParams {
  /**
   * The id of the photoset to reorder. The photoset must belong to the calling user.
   */
  photoset_id: string
  /**
   * Ordered, comma-delimited list of photo ids. Photos that are not in the list will keep their original order
   */
  photo_ids: string
}
