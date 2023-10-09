/**
 * flickr.contacts.getPublicList
 * Get the contact list for a user.
 */
export interface FlickrContactsGetPublicListParams {
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
