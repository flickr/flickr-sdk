/**
 * flickr.galleries.removePhoto
 * Remove a photo from a gallery.
 */
export interface FlickrGalleriesRemovePhotoParams {
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
