/**
 * flickr.contacts.getTaggingSuggestions
 * Get suggestions for tagging people in photos based on the calling user's contacts.
 */
export interface FlickrContactsGetTaggingSuggestionsParams {
  /**
   * Number of contacts to return per page. If this argument is omitted, all contacts will be returned.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
