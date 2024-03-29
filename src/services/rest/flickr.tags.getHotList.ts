/**
 * This file was auto-generated on 2023-10-24T15:44:49.913Z
 * flickr.tags.getHotList
 * Returns a list of hot tags for the given period.
 * Permissions required: none
 */
export type FlickrTagsGetHotListParams = {
  /**
   * The period for which to fetch hot tags. Valid values are <code>day</code> and <code>week</code> (defaults to <code>day</code>).
   */
  period?: string
  /**
   * The number of tags to return. Defaults to 20. Maximum allowed value is 200.
   */
  count?: string
}
