/**
 * This file was auto-generated on 2023-10-24T15:44:49.861Z
 * flickr.photosets.orderSets
 * Set the order of photosets for the calling user.
 * Permissions required: write
 */
export type FlickrPhotosetsOrderSetsParams = {
  /**
   * A comma delimited list of photoset IDs, ordered with the set to show first, first in the list. Any set IDs not given in the list will be set to appear at the end of the list, ordered by their IDs.
   */
  photoset_ids: string
}
