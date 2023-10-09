/**
 * flickr.photosets.getInfo
 * Gets information about a photoset.
 */
export interface FlickrPhotosetsGetInfoParams {
  /**
   * The ID of the photoset to fetch information for.
   */
  photoset_id: string
  /**
   * The user_id here is the owner of the set passed in photoset_id.
   */
  user_id: string
}
