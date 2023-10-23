/**
 * This file was auto-generated on 2023-10-24T15:44:49.706Z
 * flickr.galleries.addPhoto
 * Add a photo to a gallery.
 * Permissions required: write
 */
export type FlickrGalleriesAddPhotoParams = {
  /**
   * The ID of the gallery to add a photo to.  Note: this is the compound ID returned in methods like <a href="/services/api/flickr.galleries.getList.html">flickr.galleries.getList</a>, and <a href="/services/api/flickr.galleries.getListForPhoto.html">flickr.galleries.getListForPhoto</a>.
   */
  gallery_id: string
  /**
   * The photo ID to add to the gallery
   */
  photo_id: string
  /**
   * A short comment or story to accompany the photo.
   */
  comment?: string
  /**
   * If specified, return updated details of the gallery the photo was added to
   */
  full_response?: string
}
