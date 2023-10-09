/**
 * flickr.photos.getFavorites
 * Returns the list of people who have favorited a given photo.
 */
export interface FlickrPhotosGetFavoritesParams {
  /**
   * The ID of the photo to fetch the favoriters list for.
   */
  photo_id: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
  /**
   * Number of usres to return per page. If this argument is omitted, it defaults to 10. The maximum allowed value is 50.
   */
  per_page?: string
}
