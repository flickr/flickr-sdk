/**
 * flickr.favorites.getContext
 * Returns next and previous favorites for a photo in a user's favorites.
 */
export interface FlickrFavoritesGetContextParams {
  /**
   * The id of the photo to fetch the context for.
   */
  photo_id: string
  /**
   * The user who counts the photo as a favorite.
   */
  user_id: string
}
