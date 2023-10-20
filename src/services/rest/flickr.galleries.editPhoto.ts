/**
 * This file was auto-generated on 2023-10-20T16:36:46.671Z
 * flickr.galleries.editPhoto
 * Edit the comment for a gallery photo.
 */
export interface FlickrGalleriesEditPhotoParams {
  /**
   * The ID of the gallery to add a photo to. Note: this is the compound ID returned in methods like flickr.galleries.getList, and flickr.galleries.getListForPhoto.
   */
  gallery_id: string
  /**
   * The photo ID to add to the gallery.
   */
  photo_id: string
  /**
   * The updated comment the photo.
   */
  comment: string
}
