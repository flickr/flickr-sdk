/**
 * This file was auto-generated on 2023-10-24T15:44:49.753Z
 * flickr.machinetags.getNamespaces
 * Return a list of unique namespaces, optionally limited by a given predicate, in alphabetical order.
 * Permissions required: none
 */
export type FlickrMachinetagsGetNamespacesParams = {
  /**
   * Limit the list of namespaces returned to those that have the following predicate.
   */
  predicate?: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
