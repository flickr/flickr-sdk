/**
 * This file was auto-generated on 2023-10-20T16:36:46.695Z
 * flickr.machinetags.getNamespaces
 * Return a list of unique namespaces, optionally limited by a given predicate, in alphabetical order.
 */
export interface FlickrMachinetagsGetNamespacesParams {
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
