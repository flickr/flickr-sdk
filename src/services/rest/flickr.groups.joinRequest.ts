/**
 * This file was auto-generated on 2023-10-24T15:44:49.735Z
 * flickr.groups.joinRequest
 * Request to join a group that is invitation-only.
 * Permissions required: write
 */
export type FlickrGroupsJoinRequestParams = {
  /**
   * The NSID of the group to request joining.
   */
  group_id: string
  /**
   * Message to the administrators.
   */
  message: string
  /**
   * If the group has rules, they must be displayed to the user prior to joining. Passing a true value for this argument specifies that the application has displayed the group rules to the user, and that the user has agreed to them. (See flickr.groups.getInfo).
   */
  accept_rules: string
}
