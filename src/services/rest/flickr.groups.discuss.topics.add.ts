/**
 * flickr.groups.discuss.topics.add
 * Post a new discussion topic to a group.
 */
export interface FlickrGroupsDiscussTopicsAddParams {
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
