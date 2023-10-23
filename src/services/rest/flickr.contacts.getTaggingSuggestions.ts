/**
 * This file was auto-generated on 2023-10-24T15:44:49.697Z
 * flickr.contacts.getTaggingSuggestions
 * Get suggestions for tagging people in photos based on the calling user's contacts.
 * Permissions required: read
 */
export type FlickrContactsGetTaggingSuggestionsParams = {
  /**
   * Number of contacts to return per page. If this argument is omitted, all contacts will be returned.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
