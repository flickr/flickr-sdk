/**
 * This file was auto-generated on 2023-10-20T16:36:46.774Z
 * flickr.photosets.getList
 * Returns the photosets belonging to the specified user.
 */
export interface FlickrPhotosetsGetListParams {
  /**
   * The NSID of the user to get a photoset list for. If none is specified, the calling user is assumed.
   */
  user_id?: string
  /**
   * The page of results to get. Currently, if this is not provided, all sets are returned, but this behaviour may change in future.
   */
  page?: string
  /**
   * The number of sets to get per page. If paging is enabled, the maximum number of sets per page is 500.
   */
  per_page?: string
  /**
   * A comma-delimited list of extra information to fetch for the primary photo. Currently supported fields are: license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_m, url_o
   */
  primary_photo_extras?: string
  /**
   * A comma-separated list of photo ids. If specified, each returned set will include a list of these photo ids that are present in the set as "has_requested_photos"
   */
  photo_ids?: string
  /**
   * A comma-separated list of groups used to sort the output sets. If has_photo is present, any of the calling user's galleries containing photos referred to in photo_ids will be returned before other galleries. The order of the sort_groups will dictate the order that the groups are returned in. Only available if continuation is used. The resulting output will include a "sort_group" parameter indicating the sort_group that each set is part of, or null if not applicable
   */
  sort_groups?: string
}
