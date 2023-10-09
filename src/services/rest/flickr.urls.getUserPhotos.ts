/**
 * flickr.urls.getUserPhotos
 * Returns the url to a user's photos.
 */
export interface FlickrUrlsGetUserPhotosParams {
  /**
   * The NSID of the user to fetch the url for. If omitted, the calling user is assumed.
   */
  user_id?: string
}
