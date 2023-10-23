/**
 * This file was auto-generated on 2023-10-24T15:44:49.837Z
 * flickr.photos.setContentType
 * Set the content type of a photo.
 * Permissions required: write
 */
export type FlickrPhotosSetContentTypeParams = {
  /**
   * The id of the photo to set the content type of.
   */
  photo_id: string
  /**
   * The content type of the photo. Must be one of: 1 for Photo, 2 for Screenshot, 3 for Other, 4 for Virtual Photography
   */
  content_type: string
}
