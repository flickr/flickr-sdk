/**
 * flickr.places.getInfo
 * Get informations about a place.
 */
export interface FlickrPlacesGetInfoParams {
  /**
   * A Flickr Places ID. <span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
   */
  place_id?: string
  /**
   * A Where On Earth (WOE) ID. <span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
   */
  woe_id?: string
}
