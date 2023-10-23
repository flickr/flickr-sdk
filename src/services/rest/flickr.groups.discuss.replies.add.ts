/**
 * This file was auto-generated on 2023-10-24T15:44:49.722Z
 * flickr.groups.discuss.replies.add
 * Post a new reply to a group discussion topic.
 * Permissions required: write
 */
export type FlickrGroupsDiscussRepliesAddParams = {
  /**
   * Pass in the group id to where the topic belongs. Can be NSID or group alias. Making this parameter optional for legacy reasons, but it is highly recommended to pass this in to get faster performance.
   */
  group_id: string
  /**
   * The ID of the topic to post a comment to.
   */
  topic_id: string
  /**
   * The message to post to the topic.
   */
  message: string
}
