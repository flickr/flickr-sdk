/**
 * This file was auto-generated on 2023-10-24T15:44:49.721Z
 * flickr.galleries.removePhoto
 * Remove a photo from a gallery.
 * Permissions required: write
 */
export type FlickrGalleriesRemovePhotoParams = {
  /**
   * The ID of the gallery to remove a photo from
   */
  gallery_id: string
  /**
   * The ID of the photo to remove from the gallery
   */
  photo_id: string
  /**
   * If specified, return updated details of the gallery the photo was removed from
   */
  full_response: string
}
