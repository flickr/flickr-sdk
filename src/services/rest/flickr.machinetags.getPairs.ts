/**
 * This file was auto-generated on 2023-10-24T15:44:49.754Z
 * flickr.machinetags.getPairs
 * Return a list of unique namespace and predicate pairs, optionally limited by predicate or namespace, in alphabetical order.
 * Permissions required: none
 */
export type FlickrMachinetagsGetPairsParams = {
  /**
   * Limit the list of pairs returned to those that have the following namespace.
   */
  namespace?: string
  /**
   * Limit the list of pairs returned to those that have the following predicate.
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
