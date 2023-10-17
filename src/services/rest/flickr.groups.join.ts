/**
 * flickr.groups.join
 * Join a public group as a member.
 */
export interface FlickrGroupsJoinParams {
  /**
   * The NSID of the Group in question
   */
  group_id: string
  /**
   * If the group has rules, they must be displayed to the user prior to joining. Passing a true value for this argument specifies that the application has displayed the group rules to the user, and that the user has agreed to them. (See flickr.groups.getInfo).
   */
  accept_rules?: string
}
