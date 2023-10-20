/**
 * This file was auto-generated on 2023-10-20T16:36:46.669Z
 * flickr.galleries.create
 * Create a new gallery for the calling user.
 */
export interface FlickrGalleriesCreateParams {
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
