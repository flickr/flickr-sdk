/**
 * This file was auto-generated on 2023-10-24T15:44:49.726Z
 * flickr.groups.discuss.replies.getInfo
 * Get information on a group topic reply.
 * Permissions required: none
 */
export type FlickrGroupsDiscussRepliesGetInfoParams = {
  /**
   * Pass in the group id to where the topic belongs. Can be NSID or group alias. Making this parameter optional for legacy reasons, but it is highly recommended to pass this in to get faster performance.
   */
  group_id: string
  /**
   * The ID of the topic the post is in.
   */
  topic_id: string
  /**
   * The ID of the reply to fetch.
   */
  reply_id: string
}
