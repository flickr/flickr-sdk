/**
 * This file was auto-generated on 2023-10-24T15:44:49.731Z
 * flickr.groups.discuss.topics.getList
 * Get a list of discussion topics in a group.
 * Permissions required: none
 */
export type FlickrGroupsDiscussTopicsGetListParams = {
  /**
   * The NSID or path alias of the group to fetch information for.
   */
  group_id: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
