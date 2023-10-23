/**
 * This file was auto-generated on 2023-10-24T15:44:49.870Z
 * flickr.places.getShapeHistory
 * Return an historical list of all the shape data generated for a Places or Where on Earth (WOE) ID.
 * Permissions required: none
 */
export type FlickrPlacesGetShapeHistoryParams = {
  /**
   * A Flickr Places ID. <span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
   */
  place_id?: string
  /**
   * A Where On Earth (WOE) ID. <span style="font-style:italic;">(While optional, you must pass either a valid Places ID or a WOE ID.)</span>
   */
  woe_id?: string
}
