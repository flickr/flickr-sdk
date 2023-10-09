/**
 * flickr.favorites.getPublicList
 * Returns a list of favorite public photos for the given user.
 */
export interface FlickrFavoritesGetPublicListParams {
  /**
   * The user to fetch the favorites list for.
   */
  user_id: string
  /**
   * Minimum date that a photo was favorited on. The date should be in the form of a unix timestamp.
   */
  min_fave_date?: string
  /**
   * Maximum date that a photo was favorited on. The date should be in the form of a unix timestamp.
   */
  max_fave_date?: string
  /**
   * A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: <code>description</code>, <code>license</code>, <code>date_upload</code>, <code>date_taken</code>, <code>owner_name</code>, <code>icon_server</code>, <code>original_format</code>, <code>last_update</code>, <code>geo</code>, <code>tags</code>, <code>machine_tags</code>, <code>o_dims</code>, <code>views</code>, <code>media</code>, <code>path_alias</code>, <code>url_sq</code>, <code>url_t</code>, <code>url_s</code>, <code>url_q</code>, <code>url_m</code>, <code>url_n</code>, <code>url_z</code>, <code>url_c</code>, <code>url_l</code>, <code>url_o</code>
   */
  extras?: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
