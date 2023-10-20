/**
 * This file was auto-generated on 2023-10-20T16:36:46.697Z
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
