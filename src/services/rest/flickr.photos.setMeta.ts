/**
 * This file was auto-generated on 2023-10-24T15:44:49.839Z
 * flickr.photos.setMeta
 * Set the meta information for a photo.
 * Permissions required: write
 */
export type FlickrPhotosSetMetaParams = {
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
