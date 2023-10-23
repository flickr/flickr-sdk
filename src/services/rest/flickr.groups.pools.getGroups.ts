/**
 * This file was auto-generated on 2023-10-24T15:44:49.741Z
 * flickr.groups.pools.getGroups
 * Returns a list of groups to which you can add photos.
 * Permissions required: read
 */
export type FlickrGroupsPoolsGetGroupsParams = {
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
  /**
   * Number of groups to return per page. If this argument is omitted, it defaults to 400. The maximum allowed value is 400.
   */
  per_page?: string
}
