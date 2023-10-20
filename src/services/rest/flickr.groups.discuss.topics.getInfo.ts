/**
 * This file was auto-generated on 2023-10-20T16:36:46.684Z
 * flickr.groups.discuss.topics.getInfo
 * Get information about a group discussion topic.
 */
export interface FlickrGroupsDiscussTopicsGetInfoParams {
  /**
   * NSID or group alias of the group to which the topic belongs. Making this parameter optional for legacy reasons, but it is highly recommended to pass this in to get better performance.
   */
  group_id: string
  /**
   * The ID for the topic to edit.
   */
  topic_id: string
}
