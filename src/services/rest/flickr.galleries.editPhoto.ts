/**
 * This file was auto-generated on 2023-10-24T15:44:49.710Z
 * flickr.galleries.editPhoto
 * Edit the comment for a gallery photo.
 * Permissions required: write
 */
export type FlickrGalleriesEditPhotoParams = {
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
