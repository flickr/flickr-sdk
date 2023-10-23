/**
 * This file was auto-generated on 2023-10-24T15:44:49.736Z
 * flickr.groups.leave
 * Leave a group.

<br /><br />If the user is the only administrator left, and there are other members, the oldest member will be promoted to administrator.

<br /><br />If the user is the last person in the group, the group will be deleted.
 * Permissions required: delete
 */
export type FlickrGroupsLeaveParams = {
  /**
   * The NSID of the Group to leave
   */
  group_id: string
  /**
   * Delete all photos by this user from the group
   */
  delete_photos?: string
}
