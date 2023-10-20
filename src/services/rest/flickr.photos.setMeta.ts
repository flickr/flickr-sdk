/**
 * This file was auto-generated on 2023-10-20T16:36:46.750Z
 * flickr.photos.setMeta
 * Set the meta information for a photo.
 */
export interface FlickrPhotosSetMetaParams {
  /**
   * The id of the photo to set information for.
   */
  photo_id: string
  /**
   * The title for the photo. At least one of title or description must be set.
   */
  title?: string
  /**
   * The description for the photo. At least one of title or description must be set.
   */
  description?: string
}
