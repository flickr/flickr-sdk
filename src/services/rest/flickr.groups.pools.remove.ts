/**
 * flickr.groups.pools.remove
 * Remove a photo from a group pool.
 */
export interface FlickrGroupsPoolsRemoveParams {
  /**
   * The id of the photo to remove from the group pool. The photo must either be owned by the calling user of the calling user must be an administrator of the group.
   */
  photo_id: string
  /**
   * The NSID of the group who's pool the photo is to removed from.
   */
  group_id: string
}
