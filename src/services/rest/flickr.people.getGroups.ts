/**
 * This file was auto-generated on 2023-10-20T16:36:46.702Z
 * flickr.people.getGroups
 * Returns the list of groups a user is a member of.
 */
export interface FlickrPeopleGetGroupsParams {
  /**
   * The NSID of the user to fetch groups for.
   */
  user_id: string
  /**
   * A comma-delimited list of extra information to fetch for each returned record. Currently supported fields are: <code>privacy</code>, <code>throttle</code>, <code>restrictions</code>
   */
  extras?: string
}
