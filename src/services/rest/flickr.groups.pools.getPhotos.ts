/**
 * This file was auto-generated on 2023-10-24T15:44:49.747Z
 * flickr.groups.pools.getPhotos
 * Returns a list of pool photos for a given group, based on the permissions of the group and the user logged in (if any).
 * Permissions required: none
 */
export type FlickrGroupsPoolsGetPhotosParams = {
  /**
   * The id of the group who's pool you which to get the photo list for.
   */
  group_id: string
  /**
   * A tag to filter the pool with. At the moment only one tag at a time is supported.
   */
  tags?: string
  /**
   * The nsid of a user. Specifiying this parameter will retrieve for you only those photos that the user has contributed to the group pool.
   */
  user_id?: string
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
