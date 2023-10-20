/**
 * This file was auto-generated on 2023-10-20T16:36:46.698Z
 * flickr.machinetags.getValues
 * Return a list of unique values for a namespace and predicate.
 */
export interface FlickrMachinetagsGetValuesParams {
  /**
   * The namespace that all values should be restricted to.
   */
  namespace: string
  /**
   * The predicate that all values should be restricted to.
   */
  predicate: string
  /**
   * Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
   */
  per_page?: string
  /**
   * The page of results to return. If this argument is omitted, it defaults to 1.
   */
  page?: string
}
