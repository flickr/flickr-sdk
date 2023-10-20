/**
 * This file was auto-generated on 2023-10-20T16:36:46.749Z
 * flickr.photos.setContentType
 * Set the content type of a photo.
 */
export interface FlickrPhotosSetContentTypeParams {
  /**
   * The id of the photo to set the content type of.
   */
  photo_id: string
  /**
   * The content type of the photo. Must be one of: 1 for Photo, 2 for Screenshot, 3 for Other, 4 for Virtual Photography
   */
  content_type: string
}
