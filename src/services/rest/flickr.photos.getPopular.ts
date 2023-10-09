/**
 * flickr.photos.getPopular
 * Returns a list of popular photos
 */
export interface FlickrPhotosGetPopularParams {
  /**
   * The NSID of the user to get a galleries list for. If none is specified, the calling user is assumed.
   */
  user_id?: string
  /**
   * The sort order. One of <code>faves</code>, <code>views</code>, <code>comments</code> or <code>interesting</code>. Defaults to <code>interesting</code>.
   */
  sort?: string
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
