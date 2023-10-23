/**
 * This file was auto-generated on 2023-10-24T15:44:49.766Z
 * flickr.people.getGroups
 * Returns the list of groups a user is a member of.
 * Permissions required: read
 */
export type FlickrPeopleGetGroupsParams = {
  /**
   * The NSID of the user to fetch groups for.
   */
  user_id: string
  /**
   * A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: <code>privacy</code>, <code>throttle</code>, <code>restrictions</code>
   */
  extras?: string
}
