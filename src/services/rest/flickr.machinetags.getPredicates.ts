/**
 * flickr.machinetags.getPredicates
 * Return a list of unique predicates, optionally limited by a given namespace.
 */
export interface FlickrMachinetagsGetPredicatesParams {
  /**
   * Limit the list of predicates returned to those that have the following namespace.
   */
  namespace?: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
