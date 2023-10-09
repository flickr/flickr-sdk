/**
 * flickr.groups.discuss.replies.getList
 * Get a list of replies from a group discussion topic.
 */
export interface FlickrGroupsDiscussRepliesGetListParams {
  /**
   * Pass in the group id to where the topic belongs. Can be NSID or group alias. Making this parameter optional for legacy reasons, but it is highly recommended to pass this in to get faster performance.
   */
  group_id: string
  /**
   * The ID of the topic to fetch replies for.
   */
  topic_id: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
