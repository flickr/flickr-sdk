/**
 * flickr.photosets.getContext
 * Returns next and previous photos for a photo in a set.
 */
export interface FlickrPhotosetsGetContextParams {
  /**
   * The id of the photo to fetch the context for.
   */
  photo_id: string
  /**
   * The id of the photoset for which to fetch the photo's context.
   */
  photoset_id: string
}
