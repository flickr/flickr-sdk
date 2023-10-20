/**
 * This file was auto-generated on 2023-10-20T16:36:46.675Z
 * flickr.galleries.getList
 * Return the list of galleries created by a user.  Sorted from newest to oldest.
 */
export interface FlickrGalleriesGetListParams {
  /**
   * The NSID of the user to get a galleries list for. If none is specified, the calling user is assumed.
   */
  user_id: string
  /**
   * Number of galleries to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
  /**
   * A comma-delimited list of extra information to fetch for the primary photo. Currently supported fields are: license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_m, url_o
   */
  primary_photo_extras?: string
  /**
   * The first request must pass the "continuation" parameter with the value of "0". The server responds back with a response that includes the "continuation" field along with "pages" and "total" fields in the response. For the subsequent requests, the client must relay the value of the "continuation" response field as the value of the "continuation" request parameter. On the last page of results, the server will respond with a continuation value of "-1".
   */
  continuation: string
  /**
   * A comma-separated list of groups used to sort the output sets. If has_photo is present, any of the calling user's galleries containing photos referred to in photo_ids will be returned before other galleries. If suggested is present, a number of suggested galleries will be returned before other sets. The order of the sort_groups will dictate the order that the groups are returned in. Only available if continuation is used. The resulting output will include a "sort_group" parameter indicating the sort_group that each set is part of, or null if not applicable
   */
  sort_groups?: string
  /**
   * A comma-separated list of photo ids. If specified along with has_photo in sort_groups, each returned gallery will include a list of these photo ids that are present in the gallery as "has_requested_photos"
   */
  photo_ids?: string
  /**
   * set to 1 if cover photos for galleries should be returned. If primary photo exists, 1 primary photo and 2 other photos will be returned (in order). If not, 6 photos in order will be returned
   */
  cover_photos?: string
  /**
   * size of primary photo on the cover (if primary photo exists in gallery). will default to 'q' if not set
   */
  primary_photo_cover_size?: string
  /**
   * size of cover photos (will default to 'q' if not set)
   */
  cover_photos_size?: string
  /**
   * number of cover photos to fetch for galleries without a primary photo. Default is 6
   */
  limit?: string
  /**
   * number of cover photos to fetch (excluding primary photo) for galleries with a primary photo. Default is 2.
   */
  short_limit: string
}
