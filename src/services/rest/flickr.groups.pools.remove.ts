/**
 * This file was auto-generated on 2023-10-24T15:44:49.748Z
 * flickr.groups.pools.remove
 * Remove a photo from a group pool.
 * Permissions required: write
 */
export type FlickrGroupsPoolsRemoveParams = {
  /**
   * The id of the photo to remove from the group pool. The photo must either be owned by the calling user of the calling user must be an administrator of the group.
   */
  photo_id: string
  /**
   * The NSID of the group who's pool the photo is to removed from.
   */
  group_id: string
}
