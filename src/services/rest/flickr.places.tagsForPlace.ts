/**
 * flickr.places.tagsForPlace
 * Return a list of the top 100 unique tags for a Flickr Places or Where on Earth (WOE) ID
 */
export interface FlickrPlacesTagsForPlaceParams {
  /**
 * A Where on Earth identifier to use to filter photo clusters.<br /><br />
<span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
 */
  woe_id?: string
  /**
 * A Flickr Places identifier to use to filter photo clusters.<br /><br />
<span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
 */
  place_id?: string
  /**
   * Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date should be in the form of a unix timestamp.
   */
  min_upload_date?: string
  /**
   * Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date should be in the form of a unix timestamp.
   */
  max_upload_date?: string
  /**
   * Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date should be in the form of a mysql datetime.
   */
  min_taken_date?: string
  /**
   * Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date should be in the form of a mysql datetime.
   */
  max_taken_date?: string
}
