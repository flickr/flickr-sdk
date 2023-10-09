/**
 * flickr.photos.removeTag
 * Remove a tag from a photo.
 */
export interface FlickrPhotosRemoveTagParams {
  /**
   * The tag to remove from the photo. This parameter should contain a tag id, as returned by <a href="/services/api/flickr.photos.getInfo.html">flickr.photos.getInfo</a>.
   */
  tag_id: string
}
