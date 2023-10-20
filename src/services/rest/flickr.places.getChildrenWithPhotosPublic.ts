/**
 * This file was auto-generated on 2023-10-20T16:36:46.778Z
 * flickr.places.getChildrenWithPhotosPublic
 * Return a list of locations with public photos that are parented by a Where on Earth (WOE) or Places ID.
 */
export interface FlickrPlacesGetChildrenWithPhotosPublicParams {
  /**
   * A Flickr Places ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  place_id?: string
  /**
   * A Where On Earth (WOE) ID. (While optional, you must pass either a valid Places ID or a WOE ID.)
   */
  woe_id?: string
}
