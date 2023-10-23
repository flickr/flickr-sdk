/**
 * This file was auto-generated on 2023-10-24T15:44:49.709Z
 * flickr.galleries.editMeta
 * Modify the meta-data for a gallery.
 * Permissions required: write
 */
export type FlickrGalleriesEditMetaParams = {
  /**
   * The gallery ID to update.
   */
  gallery_id: string
  /**
   * The new title for the gallery.
   */
  title: string
  /**
   * The new description for the gallery.
   */
  description?: string
}
