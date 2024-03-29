/**
 * This file was auto-generated on 2023-10-24T15:44:49.738Z
 * flickr.groups.pools.add
 * Add a photo to a group's pool.
 * Permissions required: write
 */
export type FlickrGroupsPoolsAddParams = {
  /**
   * The id of the photo to add to the group pool. The photo must belong to the calling user.
   */
  photo_id: string
  /**
   * The NSID of the group who's pool the photo is to be added to.
   */
  group_id: string
}
