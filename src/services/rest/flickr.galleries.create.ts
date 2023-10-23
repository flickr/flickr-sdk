/**
 * This file was auto-generated on 2023-10-24T15:44:49.708Z
 * flickr.galleries.create
 * Create a new gallery for the calling user.
 * Permissions required: write
 */
export type FlickrGalleriesCreateParams = {
  /**
   * The name of the gallery
   */
  title: string
  /**
   * A short description for the gallery
   */
  description: string
  /**
   * The first photo to add to your gallery
   */
  primary_photo_id?: string
  /**
   * Get the result in the same format as galleries.getList
   */
  full_result?: string
}
