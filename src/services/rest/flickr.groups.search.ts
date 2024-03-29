/**
 * This file was auto-generated on 2023-10-24T15:44:49.750Z
 * flickr.groups.search
 * Search for groups. 18+ groups will only be returned for authenticated calls where the authenticated user is over 18.
 * Permissions required: none
 */
export type FlickrGroupsSearchParams = {
  /**
   * The text to search for.
   */
  text: string
  /**
   * Number of groups to return per page. If this argument is ommited, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is ommited, it defaults to 1.
   */
  page?: string
}
