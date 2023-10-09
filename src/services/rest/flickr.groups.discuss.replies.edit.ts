/**
 * flickr.groups.discuss.replies.edit
 * Edit a topic reply.
 */
export interface FlickrGroupsDiscussRepliesEditParams {
  /**
   * Pass in the group id to where the topic belongs. Can be NSID or group alias. Making this parameter optional for legacy reasons, but it is highly recommended to pass this in to get faster performance.
   */
  group_id: string
  /**
   * The ID of the topic the post is in.
   */
  topic_id: string
  /**
   * The ID of the reply post to edit.
   */
  reply_id: string
  /**
   * The message to edit the post with.
   */
  message: string
}
