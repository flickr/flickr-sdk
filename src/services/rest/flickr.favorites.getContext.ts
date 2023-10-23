/**
 * This file was auto-generated on 2023-10-24T15:44:49.699Z
 * flickr.favorites.getContext
 * Returns next and previous favorites for a photo in a user's favorites.
 * Permissions required: none
 */
export type FlickrFavoritesGetContextParams = {
  /**
   * The id of the photo to fetch the context for.
   */
  photo_id: string
  /**
   * The user who counts the photo as a favorite.
   */
  user_id: string
}
