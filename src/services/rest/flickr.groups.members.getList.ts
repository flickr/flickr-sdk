/**
 * This file was auto-generated on 2023-10-20T16:36:46.689Z
 * flickr.groups.members.getList
 * Get a list of the members of a group.  The call must be signed on behalf of a Flickr member, and the ability to see the group membership will be determined by the Flickr member's group privileges.
 */
export interface FlickrGroupsMembersGetListParams {
  /**
   * Return a list of members for this group.  The group must be viewable by the Flickr member on whose behalf the API call is made.
   */
  group_id: string
  /**
 * Comma separated list of member types
<ul>
<li>2: member</li>
<li>3: moderator</li>
<li>4: admin</li>
</ul>
By default returns all types.  (Returning super rare member type "1: narwhal" isn't supported by this API method)
 */
  membertypes?: string
  /**
   * Number of members to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
