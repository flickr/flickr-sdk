/**
 * This file was auto-generated on 2023-10-20T16:36:46.771Z
 * flickr.photosets.editMeta
 * Modify the meta-data for a photoset.
 */
export interface FlickrPhotosetsEditMetaParams {
  /**
   * The id of the photoset to modify.
   */
  photoset_id: string
  /**
   * The new title for the photoset.
   */
  title: string
  /**
   * A description of the photoset. May contain limited html.
   */
  description?: string
}
