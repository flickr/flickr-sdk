/**
 * flickr.groups.getInfo
 * Get information about a group.
 */
export interface FlickrGroupsGetInfoParams {
  /**
   * The NSID of the group to fetch information for.
   */
  group_id: string
  /**
   * The path alias of the group. One of this or the group_id param is required
   */
  group_path_alias?: string
  /**
 * The language of the group name and description to fetch.  If the language is not found, the primary language of the group will be returned.

Valid values are the same as <a href="/services/feeds/">in feeds</a>.
 */
  lang?: string
}
