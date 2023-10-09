/**
 * flickr.machinetags.getRecentValues
 * Fetch recently used (or created) machine tags values.
 */
export interface FlickrMachinetagsGetRecentValuesParams {
  /**
   * A namespace that all values should be restricted to.
   */
  namespace?: string
  /**
   * A predicate that all values should be restricted to.
   */
  predicate?: string
  /**
   * Only return machine tags values that have been added since this timestamp, in epoch seconds.
   */
  added_since?: string
}
