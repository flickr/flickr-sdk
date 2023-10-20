/**
 * This file was auto-generated on 2023-10-20T16:36:46.677Z
 * flickr.galleries.getPhotos
 * Return the list of photos for a gallery
 */
export interface FlickrGalleriesGetPhotosParams {
  /**
   * The ID of the gallery of photos to return
   */
  gallery_id: string
  /**
 * Using this parameter indicates to the server that the client is using the new, continuation based pagination rather than the older page/per_page based pagination.
The first request must pass the "continuation" parameter with the value of "0". The server responds back with a response that includes the "continuation" field along with the "per_page" field in the response. For the subsequent requests, the client must relay the value of the "continuation" response field as the value of the "continuation" request parameter. On the last page of results, the server will respond with a continuation value of "-1".
 */
  continuation?: string
  /**
   * set to 1 if user details should be returned
   */
  get_user_info?: string
  /**
   * if set to 1, info about the gallery is also returned
   */
  get_gallery_info?: string
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
