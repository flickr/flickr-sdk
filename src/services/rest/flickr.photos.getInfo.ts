/**
 * This file was auto-generated on 2023-10-20T16:36:46.729Z
 * flickr.photos.getInfo
 * Get information about a photo. The calling user must have permission to view the photo.
 */
export interface FlickrPhotosGetInfoParams {
  /**
   * The id of the photo to get information for.
   */
  photo_id: string
  /**
   * The secret for the photo. If the correct secret is passed then permissions checking is skipped. This enables the 'sharing' of individual photos by passing around the id and secret.
   */
  secret?: string
}
