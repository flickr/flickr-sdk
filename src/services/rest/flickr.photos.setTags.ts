/**
 * flickr.photos.setTags
 * Set the tags for a photo.
 */
export interface FlickrPhotosSetTagsParams {
  /**
 * The id of the photo to set tags for.

 */
  photo_id: string
  /**
   * All tags for the photo (as a single space-delimited string).
   */
  tags: string
}
