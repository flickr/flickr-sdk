/**
 * This file was auto-generated on 2023-10-24T15:44:49.867Z
 * flickr.places.getChildrenWithPhotosPublic
 * Return a list of locations with public photos that are parented by a Where on Earth (WOE) or Places ID.
 * Permissions required: none
 */
export type FlickrPlacesGetChildrenWithPhotosPublicParams = {
  /**
   * A Flickr Places ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  place_id?: string
  /**
   * A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  woe_id?: string
}
