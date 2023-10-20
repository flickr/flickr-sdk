/**
 * This file was auto-generated on 2023-10-20T16:36:46.775Z
 * flickr.photosets.orderSets
 * Set the order of photosets for the calling user.
 */
export interface FlickrPhotosetsOrderSetsParams {
  /**
   * A comma delimited list of photoset IDs, ordered with the set to show first, first in the list. Any set IDs not given in the list will be set to appear at the end of the list, ordered by their IDs.
   */
  photoset_ids: string
}
