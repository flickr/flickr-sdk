/**
 * flickr.galleries.editMeta
 * Modify the meta-data for a gallery.
 */
export interface FlickrGalleriesEditMetaParams {
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
