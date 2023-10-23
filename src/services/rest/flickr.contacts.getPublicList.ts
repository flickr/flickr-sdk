/**
 * This file was auto-generated on 2023-10-24T15:44:49.695Z
 * flickr.contacts.getPublicList
 * Get the contact list for a user.
 * Permissions required: none
 */
export type FlickrContactsGetPublicListParams = {
  /**
   * The NSID of the user to fetch the contact list for.
   */
  user_id: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 1000. The maximum allowed value is 1000.
   */
  per_page?: string
}
