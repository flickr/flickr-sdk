/**
 * This file was auto-generated on 2023-10-24T15:44:49.729Z
 * flickr.groups.discuss.topics.add
 * Post a new discussion topic to a group.
 * Permissions required: write
 */
export type FlickrGroupsDiscussTopicsAddParams = {
  /**
 * The NSID or path alias of the group to add a topic to.

 */
  group_id: string
  /**
   * The topic subject.
   */
  subject: string
  /**
   * The topic message.
   */
  message: string
}
