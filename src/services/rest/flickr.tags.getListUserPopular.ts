/**
 * flickr.tags.getListUserPopular
 * Get the popular tags for a given user (or the currently logged in user).
 */
export interface FlickrTagsGetListUserPopularParams {
  /**
   * The NSID of the user to fetch the tag list for. If this argument is not specified, the currently logged in user (if any) is assumed.
   */
  user_id?: string
  /**
   * Number of popular tags to return. defaults to 10 when this argument is not present.
   */
  count?: string
}
